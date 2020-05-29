import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";
import Card from "./Card";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "HairByShandel",
        desc:
          "Local Hair Salon business site. Static site, built with vanilla JS, HTML5, CSS3, and some GSAP ScrollMagic",
        thumbnail:
          "https://res.cloudinary.com/drucvvo7f/image/upload/c_thumb,g_face,w_342/v1590703017/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.14.42_jfuiny.png",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590703017/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.14.42_jfuiny.png",
        github: "",
      },
      {
        name: "GymPact",
        desc:
          "Social Media app for sharing gym workouts! Sort of an Instagram for workouts. Built with React frontend Rails backend. Postgresql Database and Semnatic UI fot styling.",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590703015/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.42.06_srtizh.png",
        github: "",
      },
      {
        name: "Music App",
        desc:
          "Little project built with VueJS to make samples from keyboard inputs.",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702972/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.34.40_twwuyx.png",
        github: "",
      },
      {
        name: "Notebook App",
        desc:
          "Simple notepad app with a backend. Fully responsive, built with VueJS, NodeJS, and Mongo DB database.",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702964/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.36.36_m4y5fu.png",
        github: "",
      },
      {
        name: "DrumFinder",
        desc:
          "Application to help you pick the perfect drumset for you! I play the drums and wanted to build this single page app to help those others who are in the market for a new kit. Built with ReactJS.",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702963/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.33.35_vnkvi0.png",
        github: "",
      },
      {
        name: "Pwd Manager",
        desc:
          "Password tracker app. Lets you enter passwords and even generate your own 'strong' password and tag each entry with keywords to search quickly!",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702958/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.37.07_mry4p0.png",
        github: "",
      },
    ],
  };

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
          {this.state.projects.map((project, ind) => (
            <Card key={ind} project={project}></Card>
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  width: 100%;
  height: 88%;
  border: 1px solid blue;
`;
const Wrapper = styled.div`
  padding: 0.6rem;
  height: 87%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
  @media ${device.tablet} {
    /* width: 90%; */
  }
`;
