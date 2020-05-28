import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

// Component
function App(props) {
  useEffect(() => {
    changeBackground();
  });
  const backgrounds = [
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590627951/Portfolio%20Site/denis-degioanni-9wH624ALFQA-unsplash_tthfqv.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590627980/Portfolio%20Site/jeremy-thomas-E0AHdsENmDg-unsplash_d0zp1h.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590627994/Portfolio%20Site/jeremy-thomas-4dpAqfTbvKA-unsplash_1_q0sbll.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590472301/Portfolio%20Site/nightsky_vh99sk.jpg",
  ];
  const changeBackground = () => {
    let app = document.querySelector(".App");
    let limit = backgrounds.length;
    let ind = Math.floor(Math.random() * limit);
    console.log(ind);
    app.style.backgroundImage = `url(${backgrounds[ind]})`;
  };
  return (
    <Container className="App">
      <Overlay />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Navbar change={changeBackground} />
    </Container>
  );
}

export default App;

// styles

const Container = styled.div`
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Overlay = styled.div`
  position: fixed;
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
