import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Show from "./Components/Show";

// Component
function App(props) {
  useEffect(() => {
    changeBackground();
  });
  const backgrounds = [
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1605683166/Portfolio%20Site/Background%20Pics/jeremy-perkins-uhjiu8FjnsQ-unsplash_1_zagdkm.jpg",
  ];
  const changeBackground = () => {
    let app = document.querySelector(".background");
    let limit = backgrounds.length;
    let ind = Math.floor(Math.random() * limit);
    app.style.backgroundImage = `url(${backgrounds[ind]})`;
  };
  return (
    <Container className="App">
      <Background className="background">
        <Overlay />
      </Background>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/show" component={Show} />
      </Switch>
      <Navbar change={changeBackground} />
    </Container>
  );
}

export default App;

// styles

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-attachment: fixed; */
  background-size: contain;
  animation: pulseContainer 25s alternate infinite;
  /* border: 1px solid red; */

  @keyframes pulseContainer {
    to {
      transform: scale(1.4);
    }
  }
`;
const Overlay = styled.div`
  display: none;
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
  animation: changeColors 60s infinite forwards;
  opacity: 0.4;

  @keyframes changeColors {
    0% {
      background-color: #000;
    }
    20% {
      background-color: #252b5c;
    }
    40% {
      background-color: #181d4d;
    }
    60% {
      background-color: #0f196e;
    }
    80% {
      background-color: #060e52;
    }
    100% {
      background-color: #000;
    }
  }
`;
