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
  const [vidHeight, setVidHeight] = useState(0);
  const project = props.location.state.project;
  const loader = () => {
    let player = document.querySelector(".react_player");
    let load = document.querySelectorAll(".load");
    let loading = document.querySelector(".loading");
    let vid = document.querySelector(".vid");

    // console.log(vid.scrollHeight);
    // console.log(vid.offsetHeight);
    setTimeout(() => {
      load.forEach((loader) => {
        loader.style.animationPlayState = "paused";
        loader.style.display = "none";
        loading.style.display = "none";
        vid.style.backgroundColor = "#000";
      });
    }, 800);
    setTimeout(() => {
      player.style.opacity = 1;
      setPlaying(true);
    }, 1000);
  };
  const getHeight = () => {};

  return (
    <Container>
      <Link to="/projects">
        <Button>Back</Button>
      </Link>
      <H1>{project.name}</H1>
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
  overflow: scroll;
  border: 1px solid red;
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
`;
const Vid = styled.div`
  transition-duration: 0.5s;
  /* border: 1px solid greenyellow; */
  position: relative;
  padding: 56.25% 2rem 0;
  width: 100%;
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
  /* border: 1px solid red; */
  color: #fff;
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
  /* border: 1px solid blue; */
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
`;
