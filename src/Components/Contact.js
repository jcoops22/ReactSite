import React, { Component } from "react";
import { device } from "../resources/mediaquery";
import styled from "styled-components";

class Contact extends React.Component {
  state = {
    methods: [
      {
        name: "GitHub",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590540901/Portfolio%20Site/Icons/github-icon-1-logo-svgrepo-com_m53z7h.svg",
      },
      {
        name: "LinkedIn",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542217/Portfolio%20Site/Icons/linkedin-svgrepo-com_qovutr.svg",
      },
      {
        name: "Instagram",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542498/Portfolio%20Site/Icons/instagram-2-1-logo-svgrepo-com_tuerrj.svg",
      },
      {
        name: "Codepen",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542642/Portfolio%20Site/Icons/11898456151579517832_fhixga.svg",
      },
      {
        name: "YouTube",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542730/Portfolio%20Site/Icons/youtube-svgrepo-com_lazs3l.svg",
      },
    ],
  };
  render() {
    return (
      <div>
        <Container>
          <h1 style={{ color: "#fff" }}>You Can Reach Me Here...</h1>
        </Container>
      </div>
    );
  }
}

export default Contact;

const Container = styled.div`
  margin: 0rem;
  display: flex;
  flex-direction: column;
  height: 80vh;
  border: 1px solid #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: 1px solid blue;
`;
