import React from "react";
import styled, { keyframes } from "styled-components";
import img from "./resources/nightsky.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

// Component
function App(props) {
  return (
    <Container className="App">
      <Overlay />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Navbar />
    </Container>
  );
}

export default App;

// styles

const Container = styled.div`
  background-image: url(${img});
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 59%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100vh;
  width: 100%;
`;
