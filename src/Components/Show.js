import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import Typer from "./Typer";
import galaxy from "../resources/Icons/galaxy.svg";
import galaxy2 from "../resources/Icons/galaxy2.svg";
import galaxylight from "../resources/Icons/galaxylight.svg";
import ReactPlayer from "react-player";
import Stars from "./Stars";

const Show = (props) => {
  const [playing, setPlaying] = useState(false);
  const project = props.location.state.project;

  // video ready function
  const loader = () => {
    let player = document.querySelector(".react_player");
    let load = document.querySelectorAll(".load");
    let loading = document.querySelector(".loading");

    setTimeout(() => {
      load.forEach((loader) => {
        loader.style.animationPlayState = "paused";
      });
    }, 600);
    setTimeout(() => {
      load.forEach((loader) => {
        loader.style.display = "none";
        loading.style.display = "none";
      });
      document.getElementById("react_p").scrollIntoView();
      player.style.opacity = 1;
      setPlaying(true);
    }, 1000);
  };
  // end video ready funtion

  return (
    <Container>
      <Link to="/projects">
        <ButtonDiv>
          <Stars id={"back"} top={"1.4rem"}>
            <Button>Back</Button>
          </Stars>
        </ButtonDiv>
      </Link>
      <H1>{project.name}</H1>
      <Desc>{project.desc}</Desc>
      <Vid className="vid">
        <Loading className="loading">
          <Typer
            sentence="Loading..."
            underline="false"
            icon="false"
            fontSize={"3vw"}
          />
          <Img
            width="8%"
            className="load"
            duration={"1.5s"}
            src={galaxy}
            name={"spin"}
          />
          <Img
            width="8%"
            className="load"
            duration={"2s"}
            src={galaxylight}
            name={"cycle"}
          />
          <Img
            width="8%"
            className="load"
            duration={"2.5s"}
            src={galaxy2}
            name={"cycle2"}
          />
        </Loading>
        <ReactPlayer
          controls={true}
          id="react_p"
          className="react_player"
          onReady={loader}
          playing={playing}
          url={project.video}
          width="100%"
          height="100%"
        />
      </Vid>
    </Container>
  );
};

export default Show;

// styles
const Container = styled.div`
  height: 90vh;
  width: 100%;
  padding: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  @media ${device.laptop} {
    width: 80%;
  }
`;
const ButtonDiv = styled.div`
  height: 4rem;
  width: 8rem;
`;
const Button = styled.button`
  cursor: pointer;
  width: 5rem;
  height: 8rem;
  margin: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  /* background-color: #00ff00; */
  background-color: rgba(0, 255, 0, 0.3);
`;
const H1 = styled.h1`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  color: white;
  margin-top: 8vw;
`;
const Vid = styled.div`
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  position: relative;
  padding: 56.25% 2rem 0;
  width: 100%;
  margin: 10% auto 0;
  @media ${device.tablet} {
    width: 70%;
  }
`;
const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  @media ${device.tablet} {
    top: -8rem;
  }
  @media ${device.laptop} {
    top: -12rem;
  }
`;
const Img = styled.img`
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  position: absolute;
  top: 3rem;
  left: 45%;
  margin-top: 25%;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  animation-name: ${(props) => props.name};
  animation-duration: ${(props) => props.duration};
  @media ${device.tablet} {
    margin-top: 15%;
  }
  @media ${device.laptop} {
    /* margin-top: %; */
  }
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
  @media ${device.tablet} {
    width: 60%;
    margin: 6rem 2rem 6rem auto;
  }
`;
