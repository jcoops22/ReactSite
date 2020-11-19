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
    // "https://res.cloudinary.com/drucvvo7f/image/upload/v1605682952/Portfolio%20Site/Background%20Pics/jake-weirick-Q_RBVFFXR_g-unsplash_1_g3gehe.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1605683166/Portfolio%20Site/Background%20Pics/jeremy-perkins-uhjiu8FjnsQ-unsplash_1_zagdkm.jpg",
    // "https://res.cloudinary.com/drucvvo7f/image/upload/v1605683305/Portfolio%20Site/Background%20Pics/federico-beccari-L8126OwlroY-unsplash_1_t3n5hg.jpg",
  ];
  const changeBackground = () => {
    let app = document.querySelector(".App");
    let limit = backgrounds.length;
    let ind = Math.floor(Math.random() * limit);
    app.style.backgroundImage = `url(${backgrounds[ind]})`;
  };
  // <Overlay />
  return (
    <Container className="App">
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
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
