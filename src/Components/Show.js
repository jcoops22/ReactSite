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
  const loader = () => {
    let player = document.querySelector(".react_player");
    let load = document.querySelectorAll(".load");
    setTimeout(() => {
      load.forEach((loader) => {
        loader.style.animationDuration = "20s";
      });
    }, 1000);
    setTimeout(() => {
      load.forEach((loader) => {
        loader.style.display = "none";
      });
      player.style.opacity = 1;
      setPlaying(true);
    }, 3000);
  };

  return (
    <Container>
      <Link to="/projects">
        <Button>Back</Button>
      </Link>
      <H1>{project.name}</H1>
      <Desc>{project.desc}</Desc>
      <Vid>
        <Loading className="loadingWrapper">
          <Typer
            sentence="Loading..."
            underline="false"
            icon="false"
            fontSize={"2%"}
          />
          <Img width="8%" className="load" src={galaxy} name={"spin"} />
          <Img width="8%" className="load" src={galaxylight} name={"cycle"} />
          <Img width="8%" className="load" src={galaxy2} name={"cycle2"} />
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

      <div>
        <Link to={project.github}>
          <Button>Github</Button>
        </Link>
        <Link to={project.github}>
          <Button>Visit Site</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Show;
const H1 = styled.h1`
  color: white;
`;
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
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 45%;
  margin-top: 25%;
  animation-name: ${(props) => props.name};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: forwards;
  /* border: 1px solid blue; */
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
`;
const Vid = styled.div`
  border: 1px solid greenyellow;
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
