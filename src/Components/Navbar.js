import React, { Component } from "react";
import styled from "styled-components";
class Navbar extends Component {
  state = {
    navItems: ["About", "Contact", "Resume", "Projects"]
  };

  render() {
    const List = styled.ul`
      display: flex;
      justify-content: space-around;
      position: relative;
      top: 80vh;
      margin: 0;
    `;
    const Link = styled.li`
      margin: 2rem;
      color: #fff;
      list-style: none;
      text-decoration: none;
    `;

    return (
      <div>
        <List>
          {this.state.navItems.map(nav => (
            <Link as="a" href="/">
              {nav}
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default Navbar;
