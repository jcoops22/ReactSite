import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

// Component
class Credits extends Component {
  state = {
    credits: [
      {
        source: "Jonathan Cooper",
        description: "Developed by",
        href: "http://frosty-borg-f4c129.netlify.app/",
      },
      {
        source: "React",
        description: "Built with",
        href: "https://reactjs.org/",
      },
      {
        source: "Styled Components",
        description: "Styled with",
        href: "https://styled-components.com/",
      },
      {
        source: "Jake Weirick",
        description: "Stars Image",
        href:
          "https://unsplash.com/@weirick?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      },
    ],
    showing: false,
    left: "110%",
    planetIcon:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1605854453/Portfolio%20Site/Icons/planet-svgrepo-com_hmkl9h.svg",
    planet:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1606156556/Portfolio%20Site/Icons/destroyed-planet-svgrepo-com_wdbuko.svg",
  };
  showCredits = () => {
    this.state.showing === false
      ? this.setState({ left: "calc(110% - 450px)", showing: true })
      : this.setState({ left: "110%", showing: false });
  };
  render() {
    return (
      <div>
        <Icon onClick={this.showCredits} bg={this.state.planetIcon}></Icon>
        <CreditsDiv
          bg={this.state.planet}
          style={{
            left: this.state.left,
          }}
        >
          <Header>
            Gotta give some <span style={{ color: "#000" }}> props...</span>
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
  background-image: url(${(props) => props.bg});
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
  display: none;
  padding: 1rem;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 400px;
  height: 400px;
  position: fixed;
  overflow: scroll;
  top: 30vh;
  z-index: 97;
  cursor: auto;
  justify-content: center;
  padding-left: 4rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bg});
  border-radius: 50%;
  box-shadow: -8px 4px 12px 0px #eb4242;
  border-left: 7px solid #eb5b42;
  /* border: 1px solid red; */

  @media ${device.tablet} {
    display: flex;
  }
`;
const Line = styled.div`
  width: 100%;
  font-size: 1.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  flex-direction: column;
  margin: 5px 0;
`;
