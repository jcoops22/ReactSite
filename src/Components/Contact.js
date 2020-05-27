import React, { Component } from "react";
import { device } from "../resources/mediaquery";
import styled from "styled-components";

class Contact extends React.Component {
  state = {
    methods: [
      {
        name: "GMail",
        color: "#D44638",
        link: "",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590544957/Portfolio%20Site/Icons/1275488131581395615_risrcs.svg",
      },
      {
        name: "GitHub",
        color: "#fff",
        link: "",
        bg: "#211F1F",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590540901/Portfolio%20Site/Icons/github-icon-1-logo-svgrepo-com_m53z7h.svg",
      },
      {
        name: "LinkedIn",
        color: "#fff",
        link: "",
        bg: "#0e76a8",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542217/Portfolio%20Site/Icons/linkedin-svgrepo-com_qovutr.svg",
      },
      {
        name: "Instagram",
        color: "#fff",
        link: "",
        bg:
          "linear-gradient(90deg, rgba(250,161,30,1) 5%, rgba(250,126,30,1) 26%, rgba(214,41,118,1) 42%, rgba(150,47,191,1) 64%, rgba(79,91,213,1) 82%)",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542498/Portfolio%20Site/Icons/instagram-2-1-logo-svgrepo-com_tuerrj.svg",
      },
      {
        name: "Codepen",
        color: "#000",
        link: "",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542642/Portfolio%20Site/Icons/11898456151579517832_fhixga.svg",
      },
      {
        name: "YouTube",
        color: "#fff",
        link: "",
        bg: "#c4302b",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590545420/Portfolio%20Site/Icons/youtube-svgrepo-com_jkwykh.svg",
      },
    ],
  };
  render() {
    return (
      <div>
        <Container>
          <H1 style={{ color: "#fff", marginBottom: "2rem" }}>
            You Can Reach Me Here...
          </H1>
          <Wrapper>
            {this.state.methods.map((method) => (
              <Method>
                <Img background={method.imgbg} src={method.img} width={3} />
                <Text color={method.color} background={method.bg}>
                  <span>{method.name}</span>
                </Text>
              </Method>
            ))}
          </Wrapper>
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
  justify-content: center;
`;
const H1 = styled.h1`
  color: #fff;
  font-size: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0 1rem;
`;
const Method = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0.5rem 0;
`;
const Text = styled.div`
  border-radius: 8px;
  background: ${(props) => props.background};
  width: 100%;
  color: ${(props) => props.color};
  text-align: end;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  position: relative;
  left: ${(props) => props.width - 0.2 + "rem"};
  border-radius: 8px;
  background: ${(props) => props.background};
  width: ${(props) => props.width + "rem"};
`;
