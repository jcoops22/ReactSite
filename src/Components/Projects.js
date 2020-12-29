import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";
import Card from "./Card";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "Phew! Apparel",
        hover: "#5C80BC",
        color: "#fff",
        technologies: [
          "ReactJS",
          "Redux",
          "NodeJS",
          "Firebase",
          "Stripe/Paypal Integration",
          "NodeMailer",
        ],
        desc:
          "Robust online store built with React/Redux and Firebase database. UserAuth, emailed receipts and updates on shipping. Paypal/Stripe payment integration. A complete admin system to manage products and orders. Feel free to buy a shirt from my cousin!",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1607709562/Portfolio%20Site/project%20videos/PhewVid_jv975h.mp4",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1606710568/Portfolio%20Site/Projects%20Images/Screen_Shot_2020-11-29_at_9.10.09_PM_n9lfws.jpg",
        github: "https://github.com/jcoops22/phewapparel",
        site: "https://phewapparel.herokuapp.com/",
      },
      {
        name: "HairByShandel",
        hover: "#e0bc75",
        color: "#000",
        technologies: ["JavaScript", "HTML5", "CSS3", "GSAP ScrollMagic"],
        desc:
          "Local Hair Salon business website. Static site, built with JS, HTML5, CSS3, and GSAP ScrollMagic library",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1607711621/Portfolio%20Site/project%20videos/HBSVid_caulah.mp4",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1606172387/Portfolio%20Site/Projects%20Images/Screen_Shot_2020-11-21_at_12.32.14_PM_hvljzi.png",
        github: "https://github.com/jcoops22/hbs",
        site: "https://jcoops22.github.io/hbs/",
      },
      {
        name: "GymPact",
        hover: "#353765",
        color: "#",
        technologies: ["React", "Ruby on Rails", "PostgreSQL", "Semantic UI"],
        desc:
          "Social Media app for sharing gym workouts! Sort of an 'Instagram for workouts'. Built with React frontend Rails backend. Postgresql Database and Semantic UI for styling. Worked on a team with two other developers for this Bootcamp capstone project.",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1607711616/Portfolio%20Site/project%20videos/GymPactVid_c7tsav.mp4",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1606159529/Portfolio%20Site/Projects%20Images/Screen_Shot_2020-11-21_at_3.17.27_PM_niibjs.png",
        github: "https://github.com/devpointlabs/gym-pact",
        site: "http://gympact.herokuapp.com/",
      },
      {
        name: "Notebook App",
        hover: "lightblue",
        color: "#000",
        technologies: ["VueJS", "HTML5", "CSS3"],
        desc:
          "Simple notepad app with a backend. Built with VueJS, NodeJS, and Mongo DB database.",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1607711591/Portfolio%20Site/project%20videos/NotebookVid_jktb7z.mp4",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1606159526/Portfolio%20Site/Projects%20Images/Screen_Shot_2020-11-21_at_3.26.11_PM_m91ghb.png",
        github: "https://github.com/jcoops22/notebookApp",
        site: null,
      },
      // {
      //   name: "DrumFinder",
      //   hover: "#000",
      //   color: "#fff",
      //   technologies: ["React", "Styled Components"],
      //   desc:
      //     "Application to help you pick the perfect drumset for you! I play the drums and wanted to build this single page app to help those others who are in the market for a new kit. Built with ReactJS.",
      //   video:
      //     "https://res.cloudinary.com/drucvvo7f/video/upload/v1590769316/Portfolio%20Site/project%20videos/drumfinder_hb4z2x.mov",
      //   img:
      //     "https://res.cloudinary.com/drucvvo7f/image/upload/v1590702963/Portfolio%20Site/Projects%20Images/Screenshot_2020-05-28_15.33.35_vnkvi0.png",
      //   github: "https://github.com/jcoops22/drumfinder",
      // },
      {
        name: "Pwd Manager",
        hover: "#92B6B1",
        color: "#000",
        technologies: ["JavaScript", "NodeJS", "MongoDB"],
        desc:
          "Password tracker app. Lets you enter passwords and even generate your own strong password and tag each entry with keywords to search quickly!",
        video:
          "https://res.cloudinary.com/drucvvo7f/video/upload/v1607711657/Portfolio%20Site/project%20videos/PwdTrackerVid_fhv9ht.mp4",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1606159526/Portfolio%20Site/Projects%20Images/Screen_Shot_2020-11-21_at_10.45.18_AM_ql5daw.png",
        github: "https://github.com/jcoops22/pwdManager",
        site: null,
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
            <Card key={ind} project={project} />
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 88%;
  padding-top: 2rem;
  /* border: 1px solid red; */
`;
const Wrapper = styled.div`
  padding: 0.6rem;
  height: 87%;
  width: 100%;
  margin-top: 1rem;
  overflow-y: scroll;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* border: 1px solid red; */
  @media ${device.tablet} {
    /* width: 90%; */
  }
`;
