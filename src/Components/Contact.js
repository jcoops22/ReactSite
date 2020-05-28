import React, { Component } from "react";
import { device } from "../resources/mediaquery";
import styled from "styled-components";
import Typer from "./Typer";

class Contact extends Component {
  state = {
    methods: [
      {
        name: "GMail",
        color: "#D44638",
        link: "mailto:%20jcooper232074@gmail.com?subject=Getting%20In%20Touch",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590544957/Portfolio%20Site/Icons/1275488131581395615_risrcs.svg",
      },
      {
        name: "GitHub",
        color: "#fff",
        link: "https://github.com/jcoops22",
        bg: "#211F1F",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590540901/Portfolio%20Site/Icons/github-icon-1-logo-svgrepo-com_m53z7h.svg",
      },
      {
        name: "LinkedIn",
        color: "#fff",
        link: "https://www.linkedin.com/in/jonathancooperwebdeveloper/",
        bg: "#0e76a8",
        imgbg: "#0e76a8",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590616011/Portfolio%20Site/Icons/5808508161555589661_fqzgz4.svg",
      },
      {
        name: "Instagram",
        color: "#fff",
        link: "https://www.instagram.com/jontheawesome/",
        bg:
          "linear-gradient(90deg, rgba(250,161,30,1) 5%, rgba(250,126,30,1) 26%, rgba(214,41,118,1) 42%, rgba(150,47,191,1) 64%, rgba(79,91,213,1) 82%)",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542498/Portfolio%20Site/Icons/instagram-2-1-logo-svgrepo-com_tuerrj.svg",
      },
      {
        name: "Codepen",
        color: "#000",
        link: "https://codepen.io/jon-cooper",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542642/Portfolio%20Site/Icons/11898456151579517832_fhixga.svg",
      },
      {
        name: "YouTube",
        color: "#fff",
        link:
          "https://www.youtube.com/channel/UCEnHYoOPw05HXXUuQhsHiMg?view_as=subscriber",
        bg: "#c4302b",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590545420/Portfolio%20Site/Icons/youtube-svgrepo-com_jkwykh.svg",
      },
      {
        name: "Twitter",
        color: "#fff",
        link: "https://twitter.com/Maffmatology",
        bg: "#00acee",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590615825/Portfolio%20Site/Icons/9457207801555590088_u71mai.svg",
      },
      {
        name: "FaceBook",
        color: "#fff",
        link: "https://www.facebook.com/jon.cooper.9849/",
        bg: "#3b5998",
        imgbg: "#3b5998",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590615825/Portfolio%20Site/Icons/10165394971530077750_uqwvpu.svg",
      },
    ],
  };
  componentDidMount() {
    this.hideMethods();
    setTimeout(() => {
      this.hoverEffect();
    }, 2000);
  }
  hideMethods = () => {
    let methods = document.querySelectorAll(".method");
    methods.forEach((method) => {
      method.style.display = "none";
    });
  };
  hoverEffect = () => {
    let methods = document.querySelectorAll(".method");
    let pointer = document.querySelector(".pointer");
    methods.forEach((method, ind) => {
      method.style.animationName = "swing";
      method.style.display = "flex";
      method.style.animationDelay = ind * 0.6 + "s";
      method.addEventListener("mouseover", () => {});
    });
  };
  // <H1>You Can Reach Me Here...</H1>

  render() {
    return (
      <Container>
        <Typer
          sentence="You can reach out to me here..."
          underline="false"
          icon="false"
          fontSize={1.6}
          delay={1000}
        />
        <Wrapper>
          {this.state.methods.map((method, ind) => (
            <Link
              className="method"
              key={ind}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img background={method.imgbg} src={method.img} width={4} />
              <Text color={method.color} background={method.bg}>
                <span>{method.name}</span>
              </Text>
            </Link>
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default Contact;

const Container = styled.div`
  padding: 0.6rem;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    /* margin: 20% 0rem; */
  }
`;
const H1 = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
`;
const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: 0 1rem;
  margin-top: 1rem;
`;
const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
  opacity: 1;
  transition-duration: 0.3s;
  height: 8vh;
  max-height: 3.8rem;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  animation-fill-mode: backwards;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
`;
const Text = styled.div`
  position: relative;
  border-radius: 8px;
  background: ${(props) => props.background};
  width: 100%;
  color: ${(props) => props.color};
  text-align: end;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Img = styled.img`
  cursor: pointer;
  z-index: 1;
  position: relative;
  top: 0rem;
  left: ${(props) => props.width - 0.2 + "rem"};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${(props) => props.background};
  width: ${(props) => props.width + "rem"};
`;
const Pointer = styled.img`
  display: none;
  width: 2.2rem;
  position: relative;
  top: -4rem;
  transform: rotate(90deg);
`;
