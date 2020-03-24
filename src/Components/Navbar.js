import React, { Component } from "react";
import Credits from "./Credits";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

// styles
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 80vh;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Link = styled.li`
  margin: 2rem;
  color: #fff;
  list-style: none;
  text-decoration: none;
  display: none;
  font-size: 20px;
  opacity: 0.7;
  @media ${device.tablet} {
    display: flex;
  }
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

// Component
class Navbar extends Component {
  state = {
    navItems: ["About", "Contact", "Resume", "Projects"],
    expanded: false
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
  animateAbout = () => {
    let about = document.querySelectorAll("link")[0];
    console.log(about);
    about.style.position = "relative";
    about.style.color = "orange";
  };
  // not working yet
  // need to reset the berge on resize
  reset = () => {
    let berg = document.querySelector(".burger");
    if (berg.style.display == "none") {
      console.log("shouldn't be showing");
      this.setState({ expanded: false });
    }
  };
  linkAction = link => {
    switch (link) {
      case 0:
        // console.log(`go to the ${this.state.navItems[link]} page`);
        this.animateAbout();
        break;
      case 1:
        console.log(`go to the ${this.state.navItems[link]} page`);
        break;
      case 2:
        console.log(`go to the ${this.state.navItems[link]} page`);
        break;
      case 3:
        console.log(`go to the ${this.state.navItems[link]} page`);
        break;
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
          {this.state.navItems.map((nav, ind) => (
            <Link
              className="link"
              key={ind}
              as="a"
              href="#"
              onClick={() => this.linkAction(ind)}
            >
              {nav}
            </Link>
          ))}
          <Credits />
        </List>
      </div>
    );
  }
}

export default Navbar;
