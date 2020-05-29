import React, { Component } from "react";
import { device } from "../resources/mediaquery";
import styled from "styled-components";
import Typer from "./Typer";

class Contact extends Component {
  state = {
    methods: [
      {
        name: "GMail",
        phrase: "preferred method of contact",
        color: "#D44638",
        link: "mailto:%20jcooper232074@gmail.com?subject=Getting%20In%20Touch",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590544957/Portfolio%20Site/Icons/1275488131581395615_risrcs.svg",
      },
      {
        name: "GitHub",
        phrase: "check out my repos!",
        color: "#fff",
        link: "https://github.com/jcoops22",
        bg: "#211F1F",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590540901/Portfolio%20Site/Icons/github-icon-1-logo-svgrepo-com_m53z7h.svg",
      },
      {
        name: "LinkedIn",
        phrase: "Let's connect!",
        color: "#fff",
        link: "https://www.linkedin.com/in/jonathancooperwebdeveloper/",
        bg: "#0e76a8",
        imgbg: "#0e76a8",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590616011/Portfolio%20Site/Icons/5808508161555589661_fqzgz4.svg",
      },
      {
        name: "Instagram",
        phrase: "Follow for Follow?",
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
        phrase: "see my 'scratch paper'",
        color: "#000",
        link: "https://codepen.io/jon-cooper",
        bg: "#fff",
        imgbg: "#",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542642/Portfolio%20Site/Icons/11898456151579517832_fhixga.svg",
      },
      {
        name: "YouTube",
        phrase: "My neglected drum channel 🙃",
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
        phrase: "*Tweet *tweet",
        color: "#fff",
        link: "https://twitter.com/Maffmatology",
        bg: "#00acee",
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590615825/Portfolio%20Site/Icons/9457207801555590088_u71mai.svg",
      },
      {
        name: "FaceBook",
        phrase: "Yay Facebook 😒",
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
    let hover = document.querySelectorAll(".hover");
    methods.forEach((method, ind) => {
      method.style.animationName = "jump";
      method.style.display = "flex";
      method.style.animationDelay = ind * 0.3 + "s";
      // hover effects/ show phrase
      method.addEventListener("mouseover", () => {
        if (window.innerWidth > 520) {
          hover[ind].style.display = "block";
        }
      });
      method.addEventListener("mouseout", () => {
        hover[ind].style.display = "none";
      });
    });
  };

  render() {
    return (
      <Container>
        <Typer
          sentence="You can reach out to me here..."
          underline="false"
          icon="false"
          fontSize={"5vh"}
          delay={3500}
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
                <Hover className="hover">
                  <Typer
                    sentence={method.phrase}
                    underline="false"
                    icon="false"
                    fontSize={"1rem"}
                    delay={3500}
                  />
                </Hover>
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
    width: 90%;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem 0;
  margin-top: 1.5rem;
  @media ${device.mobileL} {
    align-items: flex-start;
  }
  @media ${device.tablet} {
    align-items: center;
  }
  @media ${device.laptop} {
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80%;
  }
`;
const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
  opacity: 1;
  transition-duration: 0.3s;
  min-height: 3.8rem;
  width: 300px;
  max-height: 3.8rem;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  animation-fill-mode: backwards;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  @media ${device.laptop} {
    &:hover {
      width: 200px;
      margin-right: 2rem;
    }
    margin: 2rem 100px 2rem 2rem;
    width: 100px;
  }
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
  @media ${device.laptop} {
    &:hover {
      justify-content: flex-end;
      padding-right: 3rem;
    }
  }
`;
const Img = styled.img`
  cursor: pointer;
  z-index: 1;
  margin-left: -${(props) => props.width + "rem"};
  position: relative;
  top: 0rem;
  left: ${(props) => props.width - 0.2 + "rem"};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${(props) => props.background};
  width: ${(props) => props.width + "rem"};
  @media ${device.laptop} {
    &:hover + ${Text} {
      justify-content: flex-end;
      padding-right: 3rem;
    }
  }
`;
const Hover = styled.div`
  display: none;
  position: relative;
  text-align: center;
  top: 1rem;
  left: 110%;
  margin-left: -13rem;
  width: 13rem;
  @media ${device.laptop} {
    left: 40%;
    top: 5rem;
  }
`;
