import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import img from "./resources/nightsky.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Letters from "./Components/Letters";
// import { Controller, Scene } from "react-scrollmagic";

// styles

const Container = styled.div`
  background-image: url(${img});
  background-attachment: fixed;
  background-size: cover;
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  color: #fff;
  margin: 0;
  position: relative;
  top: 30vh;
`;

// Component
function App(props) {
  return (
    <Container className="App">
      <Letters />
      <Header>My Website</Header>
      <Navbar />
    </Container>
  );
}

export default App;
