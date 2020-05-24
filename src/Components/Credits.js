import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Tween } from "react-gsap";

// styles
const Icon = styled.button`
  &:focus {
    outline: none;
  }
  border-radius: 50%;
  border: 3px solid #aaa;
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: fixed;
  left: calc(100% - 20px);
  top: 90vh;
  padding: 0;
`;
const CreditsDiv = styled.div`
  padding: 1rem;
  transition-duration: 1s;
  width: 200px;
  position: fixed;
  left: calc(100% - 240px);
  top: 25rem;
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #fff;
  border-radius: 20px;
  opacity: 1;
  background-color: #aaa;
  font-family: "Raleway", sans-serif;
`;

// Component
class Credits extends Component {
  state = {
    credits: [
      {
        source: "Jonathan Cooper",
        description: "Developed in 2020 by",
        href: "http://jcoops22.github.io/portfolio",
      },
      {
        source: "React",
        description: "Built with",
        href: "https://reactjs.org/docs/getting-started.html",
      },
      {
        source: "ScrollMagic",
        description: "Animated with",
        href: "https://www.npmjs.com/package/react-scrollmagic",
      },
      {
        source: "Styled Components",
        description: "Styled with",
        href: "https://styled-components.com/docs/basics#coming-from-css",
      },
      {
        source: "Unsplash",
        description: "Photo by Kristopher Roller",
        href: "https://unsplash.com/@krisroller",
      },
    ],
    tern: "none",
    height: 0,
    opacity: 0,
  };
  showCredits = () => {
    this.state.tern === "none"
      ? this.setState({ tern: "flex", height: "fit-content", opacity: 1 })
      : this.setState({ tern: "none", height: 0, opacity: 0 });
  };

  render() {
    return (
      <Icon onClick={this.showCredits}>
        <CreditsDiv
          style={{ display: this.state.tern, height: this.state.height }}
        >
          {this.state.credits.map((c, ind) => {
            return (
              <div key={ind}>
                <p style={{ display: "inline" }}>{c.description}: </p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.source}
                </a>
              </div>
            );
          })}
        </CreditsDiv>
      </Icon>
    );
  }
}

export default Credits;
