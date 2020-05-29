import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import galaxy from "../resources/Icons/galaxy.svg";
import galaxy2 from "../resources/Icons/galaxy2.svg";
import galaxylight from "../resources/Icons/galaxylight.svg";
import ReactPlayer from "react-player";

const Show = (props) => {
  const [playing, setPlaying] = useState(false);
  const project = props.location.state.project;
  const loader = () => {
    let player = document.querySelector(".react_player");
    console.log("we ready");
    player.style.opacity = 1;
    setPlaying(true);
  };
  // <Img width="10%" src={galaxy} name={"spin"} />
  //         <Img width="10%" src={galaxylight} name={"cycle"} />
  return (
    <div>
      <Link to="/projects">
        <Button>Back</Button>
      </Link>
      <H1>{project.name}</H1>
      <Desc>{project.desc}</Desc>
      <Vid>
        <Loading>
          Loading
          <Img width="10%" src={galaxy2} name={"cycle"} />
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
    </div>
  );
};

export default Show;
const H1 = styled.h1`
  color: white;
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
  left: 0;
  animation-name: ${(props) => props.name};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: forwards;
  border: 1px solid blue;
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
`;
const Vid = styled.div`
  border: 1px solid greenyellow;
  position: relative;
  padding: 56.25% 2rem 0;
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
  border: 1px solid red;
  color: #fff;
`;
