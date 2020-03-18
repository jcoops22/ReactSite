import React from "react";
import styled, { keyframes } from "styled-components";
import img from "./resources/nightsky.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Controller, Scene } from "react-scrollmagic";

function App(props) {
  const shimmer = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  const Container = styled.div`
    background-image: url(${img});
    background-attachment: fixed;
    background-size: cover;
    height: 200vh;
  `;
  const Header = styled.h1`
    color: #fff;
    margin: 0;
    position: relative;
    top: 30vh;
  `;
  const Letter = styled.span`
    animation: ${shimmer} 1s linear infinite;
    animation-delay: ${props => props.delay};
    margin: 0 1rem;
    color: #fff;
  `;

  return (
    <Container className="App">
      <Header>My Website</Header>
      <Letter delay="0">W</Letter>
      <Letter delay="0.5s">E</Letter>
      <Letter delay="0.8s">L</Letter>
      <Letter delay="1s">C</Letter>
      <Letter delay="1.2s">O</Letter>
      <Letter delay="1.3s">M</Letter>
      <Letter delay="1.8s">E</Letter>
      <Navbar />
    </Container>
  );
}

export default App;
