import React, { Component } from "react";
import Credits from "./Credits";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import leftArrow from "../resources/Icons/left-arrow-arrows-svgrepo-com.svg";

// Component
class Navbar extends Component {
  state = {
    navItems: ["About", "Contact", "Resume", "Projects"],
    expanded: false,
    places: ["Check out my projects", "Learn more 'About' me", "Contact me"],
  };

  // functions
  componentDidMount() {
    this.explore();
  }
  animateBerg = () => {
    // remove animation for "explore"
    let explore = document.querySelector(".explore");
    explore.style.display = "none";
    explore.style.animationName = "none";
    // animate the links
    let a = document.querySelectorAll(".tag");
    setTimeout(() => {
      if (this.state.expanded) {
        a.forEach((a, ind) => {
          a.style.transitionDuration = "0.4s";
          a.style.transitionDelay = `${ind}00ms`;
          a.style.top = `calc(100vh - ${ind}8vh)`;
          a.style.opacity = 1;
        });
      } else {
        a.forEach((a) => {
          a.style.opacity = 0;
          a.style.top = "-10vh";
        });
      }
    }, 1000);
    // animate the burger
    let berg = document.querySelector(".burger");
    let patty1 = document.querySelector(".patty1");
    let patty2 = document.querySelector(".patty2");
    let overlay = document.querySelector(".overlay");
    this.state.expanded = !this.state.expanded;

    if (this.state.expanded) {
      berg.style.transform = "rotate(137deg)";
      patty1.style.transform = "rotate(-90deg)";
      patty1.style.top = "17px";
      patty2.style.top = "14px";
      setTimeout(() => {
        this.state.expanded
          ? (overlay.style.display = "initial")
          : (overlay.style.display = "none");
        berg.style.left = "calc(100% - 40px)";
        berg.style.border = "2px solid #fff";
      }, 600);
    } else {
      berg.style.transform = "rotate(0deg)";
      patty1.style.transform = "rotate(0deg)";
      patty1.style.top = "12px";
      patty2.style.top = "19px";
      setTimeout(() => {
        berg.style.left = "1rem";
      }, 800);
      setTimeout(() => {
        this.state.expanded
          ? (overlay.style.display = "initial")
          : (overlay.style.display = "none");
      }, 1600);
    }
  };
  // hide/show overlay
  toggleOverlay = () => {
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
  };
  // get the random phrase to check out
  phrase = () => {
    return this.state.places[Math.floor(Math.random() * 3)];
  };
  // checkout something
  explore = () => {
    let explore = document.querySelector(".explore");
    setTimeout(() => {
      explore.style.display = "flex";
      explore.style.animationName = "shift";
    }, 1000);
  };
  // RENDER
  render() {
    return (
      <div className="navDiv">
        <Burger className="burger" onClick={this.animateBerg}>
          <Pat1 className="patty1" />
          <Pat2 className="patty2" />
        </Burger>

        <Explore className="explore">
          <Icon width={1.3} src={leftArrow} />
          {this.phrase()}
        </Explore>

        <Credits />
        <Overlay className="overlay"></Overlay>
        <List>
          <Lnk className="tag" onClick={this.animateBerg}>
            <Link className="link" to="/">
              Home
            </Link>
          </Lnk>
          <Lnk className="tag" onClick={this.animateBerg}>
            <Link className="link" to="/about">
              About
            </Link>
          </Lnk>
          <Lnk className="tag" onClick={this.animateBerg}>
            <Link className="link" to="/Projects">
              Projects
            </Link>
          </Lnk>
          <Lnk className="tag" onClick={this.animateBerg}>
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </Lnk>
        </List>
      </div>
    );
  }
}

export default Navbar;

// styles
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 35rem;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Lnk = styled.span`
  position: fixed;
  top: -10vh;
  left: 0;
  opacity: 0;
  margin: 0.5rem;
`;
const Burger = styled.div`
  &:hover {
    /* border: 3px solid #fff; */
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
  box-sizing: initial;
  position: fixed;
  top: 90vh;
  left: 1rem;
  z-index: 2;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  transition-duration: 0.4s;
  transition-delay: 0.4s;
  opacity: 0.7;
  border: 1px solid #fff;
  @media ${device.tablet} {
    /* display: none; */
  }
`;
const Pat1 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 12px;
  border-radius: 20px;
`;
const Pat2 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 19px;
  border-radius: 20px;
`;
const Overlay = styled.div`
  display: none;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
`;
const Explore = styled.span`
  position: absolute;
  width: 12rem;
  font-size: 0.8rem;
  top: 91vh;
  left: calc(0% + 7rem);
  color: #fff;
  padding-left: 0.5rem;
  display: none;
  align-items: center;
  justify-content: space-around;
  transition-duration: 0.3s;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;
const Icon = styled.img`
  width: ${(props) => props.width + "rem"};
`;
