import React from "react";
import styled from "styled-components";
import Letters from "./Letters";
import Typer from "./Typer";
import { device } from "../resources/mediaquery";
import jon from "../resources/Icons/keeper1.JPG";

import { Link } from "react-router-dom";

const Home = () => {
  // <Letters word="PORTFOLIO" top={50} />
  // <Letters word="SITE" top={50} />
  // <Letters word="TO MY" top={50} />
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Letters word="WELCOME" top={50} />
      <Img width={8} src={jon} />
      <Container>
        <Header>Hello, I'm Jonathan...</Header>
        <Intro>
          I'm a fullstack web developer in Ogden, UT. I enjoy creating
          websites/applications that are performant, fun, and provide a great
          user experience.
        </Intro>
        <Link style={{ margin: "0.5rem" }} to="/contact">
          <Typer sentence="I'd love to help build your next project!" />
        </Link>
      </Container>
    </div>
  );
};

export default Home;

// styles
const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
  top: 13vw;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #000;
  border-radius: 8px;
  @media ${device.mobileM} {
    top: 21%;
  }
  @media ${device.mobileL} {
    top: 36%;
  }
  @media ${device.tablet} {
    position: relative;
    top: 0;
    margin: 0 auto;
    width: 70%;
  }
`;
const Header = styled.h1`
  color: #fff;
  margin: 1rem 0;
  text-align: center;
`;
const Intro = styled.p`
  width: 100%;
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  line-height: 1.4;
  font-family: "Chelsea Market", cursive;
  @media ${device.tablet} {
    width: 70%;
  }
`;
const Img = styled.img`
  /* border: 1px solid red; */
  display: none;
  width: ${(props) => props.width + "rem"};
  @media ${device.tablet} {
    display: block;
  }
`;
