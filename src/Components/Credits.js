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
    debris:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1607233806/Portfolio%20Site/Icons/meteorite-svgrepo-com_1_ppybtj.svg",
  };
  showCredits = () => {
    this.state.showing === false
      ? this.setState({ left: "calc(110% - 450px)", showing: true })
      : this.setState({ left: "110%", showing: false });
  };
  render() {
    return (
      <Container>
        <Icon onClick={this.showCredits} bg={this.state.planetIcon} />
        <CreditsDiv
          bg={this.state.planet}
          style={{
            left: this.state.left,
          }}
        >
          <Header>
            Giving some <span style={{ color: "#000" }}> props...</span>
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
        <DebrisDiv
          style={{
            left: this.state.left,
          }}
        >
          <Debris
            src={this.state.debris}
            alt="space debris"
            top={"-10"}
            left={"55"}
            delay={"0.5s"}
            width={"2rem"}
          />
          <Debris
            src={this.state.debris}
            alt="space debris"
            top={"10"}
            left={"0"}
            delay={"0.3s"}
            width={"5rem"}
          />
          <Debris
            src={this.state.debris}
            alt="space debris"
            top={"50"}
            left={"55"}
            delay={"0.1s"}
            width={"3rem"}
          />
          <Debris
            src={this.state.debris}
            alt="space debris"
            top={"70"}
            left={"55"}
            delay={".7s"}
            width={"5rem"}
          />
          <Debris
            src={this.state.debris}
            alt="space debris"
            top={"90"}
            left={"5"}
            delay={".6s"}
            width={"2.5rem"}
          />
        </DebrisDiv>
      </Container>
    );
  }
}

export default Credits;

// styles
const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
`;
const Icon = styled.button`
  &:focus {
    outline: none;
  }
  position: fixed;
  left: calc(100% - 42px);
  top: 90.5vh;
  z-index: 98;
  background-image: url(${(props) => props.bg});
  display: none;
  border-radius: 50%;
  border: 3px solid #aaa;
  height: 36px;
  width: 36px;
  cursor: pointer;
  padding: 0;
  animation: rotate 5s linear infinite forwards;
  @media ${device.tablet} {
    display: initial;
  }
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
const DebrisDiv = styled.div`
  display: none;
  pointer-events: none;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 400px;
  height: 400px;
  position: fixed;
  top: 30vh;
  z-index: 97;
  /* border: 1px solid red; */

  @media ${device.tablet} {
    display: flex;
  }
`;
const Debris = styled.img`
  position: absolute;
  width: ${(props) => props.width};
  top: ${(props) => props.top + "%"};
  left: ${(props) => props.left + "%"};
  animation: floatDebris 1s forwards ease ${(props) => props.delay} infinite
    alternate;
  /* border: 1px solid blue; */

  @keyframes floatDebris {
    to {
      /* top: ${(props) => props.top + 3 + "%"}; */
      margin-top: 0.5rem;
    }
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

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
