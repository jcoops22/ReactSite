import React, { Component } from "react";
import Credits from "./Credits";
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
  @media ${device.tablet} {
    color: orange;
  }
`;
const Burger = styled.div`
  position: fixed;
  top: 90vh;
  left: 2rem;
  height: 36px;
  width: 36px;
  border: 1px solid black;
  border-radius: 50px;
  transition-duration: 0.3s;
  transition-delay: 0.4s;
  border: 3px solid #fff;
`;
const Pat1 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 12px;
`;
const Pat2 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 19px;
`;

// Component
class Navbar extends Component {
  state = {
    navItems: ["About", "Contact", "Resume", "Projects"],
    expanded: false,
    open: {
      transform: "rotate(137deg)"
    },
    patty1open: {
      transform: "rotate(-90deg)",
      top: "17px"
    },
    patty2open: {
      transform: "rotate(-90deg)",
      top: "17px"
    }
  };
  animate = () => {
    // if (!this.state.expanded) {
    //   this.state.expanded = true;

    //   two.style.top = "14px";
    // } else {
    //   expanded = false;
    //   button.style.transform = "rotate(0deg)";
    //   one.style.transform = "rotate(0deg)";
    //   one.style.top = "12px";
    //   two.style.top = "19px";
    // }
    console.log("it worked");
    this.state.expanded = true;
  };
  detStyle = () => {
    if (this.state.expanded) {
      <Burger style={{ transform: "rotate(137deg)" }} />;
    }
  };
  render() {
    return (
      <div>
        <Burger onClick={(this.animate, this.detStyle)}>
          <Pat1 style={this.state.expanded ? this.state.patty1open : null} />
          <Pat2 style={this.state.expanded ? this.state.patty2open : null} />
        </Burger>
        <List>
          {this.state.navItems.map((nav, ind) => (
            <Link key={ind} as="a" href="/">
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
