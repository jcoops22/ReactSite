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

  reset = () => {
    let berg = document.querySelector(".burger");
    if (berg.style.display == "none") {
      console.log("shouldn't be showing");
      this.setState({ expanded: false });
    }
  };
  animateAbout = () => {
    if (this.state.style.default) {
      console.log("we ran first");
      return this.state.style.about;
    } else {
      console.log("we ran");
      return this.state.style.default;
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
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/Projects">
            Projects
          </Link>
          <Link className="link" to="/Contact">
            Contact
          </Link>

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
