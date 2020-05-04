import React, { Component } from "react";
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
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
