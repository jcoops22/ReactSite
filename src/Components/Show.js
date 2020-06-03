import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import Typer from "./Typer";
import galaxy from "../resources/Icons/galaxy.svg";
import galaxy2 from "../resources/Icons/galaxy2.svg";
import galaxylight from "../resources/Icons/galaxylight.svg";
import ReactPlayer from "react-player";

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
        loader.style.display = "none";
        loading.style.display = "none";
      });
    }, 800);
    setTimeout(() => {
      document.getElementById("react_p").scrollIntoView();
      player.style.opacity = 1;
      setPlaying(true);
    }, 1000);
  };
  // end video ready funtion

  const showFullScreen = () => {
    let fs = document.querySelector(".fsbutton");
    fs.style.opacity = 0.6;
  };
  const hideFullScreen = () => {
    let fs = document.querySelector(".fsbutton");
    fs.style.opacity = 0;
  };

  //  go fullscreen
  const openFullscreen = () => {
    let player = document.querySelector(".react_player");
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      /* Firefox */
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      /* IE/Edge */
      player.msRequestFullscreen();
    }
  };

  return (
    <Container>
      <Link to="/projects">
        <Button>Back</Button>
      </Link>
      <H1>{project.name}</H1>
      <Desc>{project.desc}</Desc>
      <Vid
        className="vid"
        onMouseOver={showFullScreen}
        onMouseOut={hideFullScreen}
      >
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
          id="react_p"
          className="react_player"
          onReady={loader}
          playing={playing}
          url={project.video}
          width="100%"
          height="100%"
        />
        <FSButton className="fsbutton" onClick={openFullscreen} />
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
const Button = styled.button`
  cursor: pointer;
  width: 5rem;
  margin: 1rem;
  color: white;
  background-color: grey;
`;
const H1 = styled.h1`
  color: white;
  margin-top: 8vw;
`;
const Vid = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  transition-duration: 0.5s;
  position: absolute;
  top: 3rem;
  left: 45%;
  margin-top: 25%;
  animation-name: ${(props) => props.name};
  animation-duration: ${(props) => props.duration};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: forwards;
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
    margin: 6rem auto;
  }
`;
const FSButton = styled.span`
  background: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1591157488/Portfolio%20Site/Icons/expand-fullscreen-svgrepo-com_jetai9.svg");
  opacity: 0;
  transition-duration: 0.7s;
  cursor: pointer;
  position: absolute;
  top: 0rem;
  margin-top: 4%;
  left: calc(100% - 40px);
  height: 40px;
  width: 40px;
  @media ${device.tablet} {
    margin-top: 58%;
  }
`;
