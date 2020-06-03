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
        hover: "#e0bc75",
        color: "#000",
        desc:
          "Local Hair Salon business site. Static site, built with vanilla JS, HTML5, CSS3, and some GSAP ScrollMagic",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769279/Portfolio%20Site/project%20videos/hbssc_t9zgga.mov",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590703017/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.14.42_jfuiny.png",
        github: "",
      },
      {
        name: "GymPact",
        hover: "#353765",
        color: "#",
        desc:
          "Social Media app for sharing gym workouts! Sort of an Instagram for workouts. Built with React frontend Rails backend. Postgresql Database and Semantic UI for styling.",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769333/Portfolio%20Site/project%20videos/pwdsc_jgexsq.mov",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590703015/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.42.06_srtizh.png",
        github: "",
      },
      {
        name: "Music App",
        hover: "#fff",
        color: "#000",
        desc:
          "Little project built with VueJS to make samples from keyboard inputs.",
        video: "",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702972/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.34.40_twwuyx.png",
        github: "",
      },
      {
        name: "Notebook App",
        hover: "lightblue",
        color: "#000",
        desc:
          "Simple notepad app with a backend. Fully responsive, built with VueJS, NodeJS, and Mongo DB database.",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769320/Portfolio%20Site/project%20videos/notebooksc_tvtkiu.mov",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702964/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.36.36_m4y5fu.png",
        github: "",
      },
      {
        name: "DrumFinder",
        hover: "#000",
        color: "#fff",
        desc:
          "Application to help you pick the perfect drumset for you! I play the drums and wanted to build this single page app to help those others who are in the market for a new kit. Built with ReactJS.",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769316/Portfolio%20Site/project%20videos/drumfinder_hb4z2x.mov",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702963/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.33.35_vnkvi0.png",
        github: "",
      },
      {
        name: "Pwd Manager",
        hover: "#92B6B1",
        color: "#000",
        desc:
          "Password tracker app. Lets you enter passwords and even generate your own 'strong' password and tag each entry with keywords to search quickly!",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769333/Portfolio%20Site/project%20videos/pwdsc_jgexsq.mov",
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
          sentence="Here's some of my recent work"
          underline="false"
          icon="false"
          fontSize={"5vh"}
          delay={1500}
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
`;
const Wrapper = styled.div`
  padding: 0.6rem;
  height: 87%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media ${device.tablet} {
    /* width: 90%; */
  }
`;
