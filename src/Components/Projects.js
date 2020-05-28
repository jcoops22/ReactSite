import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Typer
          sentence="My Work"
          underline="false"
          icon="false"
          fontSize={"5vh"}
          delay={2500}
        />
        <Wrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Wrapper>
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;
const Wrapper = styled.div`
  padding: 0.6rem;
  height: 80vh;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
  border: 1px solid red;
  @media ${device.tablet} {
    /* width: 90%; */
  }
`;
const Card = styled.div`
  margin: 1rem 0;
  border: 1px solid green;
  width: 8rem;
  height: 8rem;
`;
