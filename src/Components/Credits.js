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
        source: "Styled Components",
        description: "Styled with",
        href: "https://styled-components.com/docs/basics#coming-from-css",
      },
      {
        source: "Unsplash",
        description: "Stars with peach background and water",
        href: "https://unsplash.com/@krisroller",
      },
    ],
    showing: false,
    left: "100%",
  };
  showCredits = () => {
    this.state.showing === false
      ? this.setState({ left: "calc(100% - 390px)", showing: true })
      : this.setState({ left: "100%", showing: false });
  };

  render() {
    return (
      <div>
        <Icon
          onClick={this.showCredits}
          style={{ backgroundColor: this.state.showing ? "green" : "white" }}
        ></Icon>
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
      </div>
    );
  }
}

export default Credits;

// styles
const Icon = styled.button`
  &:focus {
    outline: none;
  }
  background-image: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1591248061/Portfolio%20Site/Icons/planet-svgrepo-com_2_s5rzfu.svg");
  display: none;
  border-radius: 50%;
  border: 3px solid #aaa;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: fixed;
  left: calc(100% - 30px);
  top: 90vh;
  z-index: 98;
  padding: 0;
  animation: rotate 5s linear infinite forwards;
  @media ${device.tablet} {
    display: initial;
  }
`;
const CreditsDiv = styled.div`
  padding: 1rem;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 400px;
  position: fixed;
  overflow: scroll;
  top: 40vh;
  z-index: 98;
  cursor: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 3px solid #fff;
  border-radius: 8px;
  background-color: #aaa;
  font-family: "Raleway", sans-serif;
`;
const Line = styled.div`
  width: 100%;
  font-size: 1.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 5px;
`;
