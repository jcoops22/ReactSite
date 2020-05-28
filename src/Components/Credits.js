import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

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
    showing: false,
    left: "100%",
  };
  showCredits = () => {
    this.state.showing == false
      ? this.setState({ left: "calc(100% - 390px)", showing: true })
      : this.setState({ left: "100%", showing: false });
  };

  render() {
    return (
      <Icon
        onClick={this.showCredits}
        style={{ backgroundColor: this.state.showing ? "green" : "white" }}
      >
        <CreditsDiv
          style={{
            left: this.state.left,
          }}
        >
          <span>(click to hide)</span>
          {this.state.credits.map((c, ind) => {
            return (
              <Line key={ind}>
                <p>{c.description}: </p>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.source}
                </a>
              </Line>
            );
          })}
        </CreditsDiv>
      </Icon>
    );
  }
}

export default Credits;

// styles
const Icon = styled.button`
  &:focus {
    outline: none;
  }
  display: none;
  border-radius: 50%;
  border: 3px solid #aaa;
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: fixed;
  left: calc(100% - 20px);
  top: 90vh;
  z-index: 98;
  padding: 0;
  @media ${device.tablet} {
    display: initial;
  }
`;
const CreditsDiv = styled.div`
  padding: 1rem;
  transition-duration: 0.3s;
  width: 400px;
  position: fixed;
  overflow: scroll;
  top: 40vh;
  cursor: auto;
  display: flex;
  flex-direction: column;
  border: 3px solid #fff;
  border-radius: 8px;
  background-color: #aaa;
  font-family: "Raleway", sans-serif;
`;
const Line = styled.div`
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;
