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
        href: "http://frosty-borg-f4c129.netlify.app/",
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
        source: "Kristopher Roller",
        description: "milky way above body of water",
        href: "https://unsplash.com/@krisroller",
      },
      {
        source: "Casey Horner",
        description: "gray mountains under starry night",
        href: "https://unsplash.com/@mischievous_penguins",
      },
      {
        source: "Henry Be",
        description: "brown house beside mountain",
        href: "https://unsplash.com/@henry_be",
      },
      {
        source: "Manuel Will",
        description: "rocky mountain",
        href: "https://unsplash.com/@manufactured",
      },
      {
        source: "Casey Horner",
        description: "high-angle photography of mountain at sunset",
        href: "https://unsplash.com/@mischievous_penguins",
      },
      {
        source: "Greg Jeanneau",
        description: "starry night wallpaper",
        href: "https://unsplash.com/@gregjeanneau",
      },
      {
        source: "Wil Stewart",
        description: "trees under blue sky and stars during nighttime photo",
        href: "https://unsplash.com/@wilstewart3",
      },
    ],
    showing: false,
    left: "100%",
  };
  showCredits = () => {
    this.state.showing === false
      ? this.setState({ left: "calc(100% - 490px)", showing: true })
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
          <Header>
            Gotta give some <span style={{ color: "#444" }}> props...</span>
          </Header>
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
  background-image: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1605854453/Portfolio%20Site/Icons/planet-svgrepo-com_hmkl9h.svg");
  display: none;
  border-radius: 50%;
  border: 3px solid #aaa;
  height: 36px;
  width: 36px;
  cursor: pointer;
  position: fixed;
  left: calc(100% - 42px);
  top: 90.5vh;
  z-index: 98;
  padding: 0;
  animation: rotate 5s linear infinite forwards;
  @media ${device.tablet} {
    display: initial;
  }
`;
const Header = styled.h4`
  color: #fff;
  width: 50%;
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;
const CreditsDiv = styled.div`
  padding: 1rem;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 500px;
  height: 40vh;
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
  background-color: rgba(145, 153, 147, 0.9);
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
