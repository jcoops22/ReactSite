import React, { Component } from "react";
import Credits from "./Credits";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";

// Component
class Navbar extends Component {
  state = {
    navItems: ["About", "Contact", "Resume", "Projects"],
    expanded: false,
    style: {
      default: {},
      about: {
        position: "relative",
        top: "-20vh",
        color: "red",
      },
    },
  };

  // functions
  animateBerg = () => {
    let a = document.querySelectorAll(".tag");
    setTimeout(() => {
      if (this.state.expanded) {
        a.forEach((a, ind) => {
          a.style.opacity = 1;
          a.style.left = `${ind}0rem`;
        });
      } else {
        a.forEach((a, ind) => {
          a.style.opacity = 0;
          a.style.left = 0;
        });
      }
    }, 1000);

    let berg = document.querySelector(".burger");
    let patty1 = document.querySelector(".patty1");
    let patty2 = document.querySelector(".patty2");
    this.state.expanded = !this.state.expanded;

    if (this.state.expanded) {
      berg.style.transform = "rotate(137deg)";
      patty1.style.transform = "rotate(-90deg)";
      patty1.style.top = "17px";
      patty2.style.top = "14px";
    } else {
      berg.style.transform = "rotate(0deg)";
      patty1.style.transform = "rotate(0deg)";
      patty1.style.top = "12px";
      patty2.style.top = "19px";
    }
  };

  // RENDER
  render() {
    return (
      <div className="navDiv">
        <Burger className="burger" onClick={this.animateBerg}>
          <Pat1 className="patty1" />
          <Pat2 className="patty2" />
        </Burger>
        <List>
          <Lnk className="tag">
            <Link className="link" to="/">
              Home
            </Link>
          </Lnk>
          <Lnk className="tag">
            <Link className="link" to="/about">
              About
            </Link>
          </Lnk>
          <Lnk className="tag">
            <Link className="link" to="/Projects">
              Projects
            </Link>
          </Lnk>
          <Lnk className="tag">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </Lnk>
          <Credits />
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
  position: absolute;
  left: 0;
  opacity: 0;
`;
const Burger = styled.div`
  &:hover {
    /* border: 3px solid #fff; */
  }
  position: fixed;
  top: 90vh;
  left: 2rem;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  transition-duration: 0.4s;
  transition-delay: 0.4s;
  opacity: 0.7;
  border: 2px solid red;
  @media ${device.tablet} {
    display: none;
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
