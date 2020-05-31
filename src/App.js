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
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635942/Portfolio%20Site/Background%20Pics/denis-degioanni-9wH624ALFQA-unsplash_z09o6s_hgxatq.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635941/Portfolio%20Site/Background%20Pics/wil-stewart-T26KCgCPsCI-unsplash_f0uqbl_wzr20s.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635925/Portfolio%20Site/Background%20Pics/manuel-will-gd3t5Dtbwkw-unsplash_w48ehm_ltu8d2.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635892/Portfolio%20Site/Background%20Pics/casey-horner-mPnxwQBtUZE-unsplash_jzbmz1_lsipdl.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635879/Portfolio%20Site/Background%20Pics/nightsky_vh99sk_l8ldo2_qmxcmn.jpg",
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1590635853/Portfolio%20Site/Background%20Pics/greg-jeanneau-9sxeKzuCVoE-unsplash_znhy2q_buszjq.jpg",
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
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   opacity: 0;
//   background: rgba(0, 0, 0, 0.6);
//   background: linear-gradient(
//     0deg,
//     rgba(0, 0, 0, 1) 59%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   height: 100vh;
//   width: 100%;
// `;
