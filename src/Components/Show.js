import React from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";

const Show = (props) => {
  const project = props.location.state.project;
  return (
    <div>
      <Link to="/projects">
        <span>Back</span>
      </Link>
      <H1>this is the show page for {project.name}</H1>
    </div>
  );
};

export default Show;
const H1 = styled.h1`
  color: white;
`;
const Button = styled.button`
  width: 3rem;
  color: white;
  background-color: grey;
`;
