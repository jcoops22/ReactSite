import React from "react";
import styled from "styled-components";
import Letters from "./Letters";
import Typer from "./Typer";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Letters word="WELCOME" top={50} marginSides={"5vw"} />
      <Container>
        <Header>Hello, I'm Jonathan...</Header>
        <Intro>
          I'm a fullstack web developer in Ogden, UT. I enjoy creating
          websites/applications that are performant, fun, and provide a great
          user experience.
        </Intro>
        <Link style={{ margin: "0.5rem" }} to="/contact">
          <Typer
            delay={3000}
            sentence="I'd love to help build your next project!"
            underline="true"
            icon="false"
            fontSize={"1rem"}
          />
        </Link>
      </Container>
    </div>
  );
};

export default Home;

// styles
const Container = styled.div`
  position: relative;
  top: 13vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  @media ${device.mobileM} {
    top: 21%;
  }
  @media ${device.mobileL} {
    top: 36%;
  }
  @media ${device.tablet} {
    position: relative;
    top: 12vh;
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
  position: relative;
  margin-bottom: -4rem;
  z-index: 1;
  left: -30%;
  display: none;
  width: ${(props) => props.width + "rem"};
  @media ${device.tablet} {
    display: block;
  }
`;
