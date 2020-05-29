import React from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";

const Show = (props) => {
  const project = props.location.state.project;
  return (
    <div>
      <Link to="/projects">
        <Button>Back</Button>
      </Link>
      <H1>{project.name}</H1>
      <Desc>{project.desc}</Desc>
      <img width={"90%"} src={project.img} />
      <div>
        <Link to={project.github}>
          <Button>Github</Button>
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
  width: ${(props) => props.width};
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
`;
