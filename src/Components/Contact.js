import React, { Component } from "react";
import { device } from "../resources/mediaquery";
import styled from "styled-components";

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
        imgbg: "#fff",
        img:
          "https://res.cloudinary.com/drucvvo7f/image/upload/v1590542217/Portfolio%20Site/Icons/linkedin-svgrepo-com_qovutr.svg",
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
    ],
  };
  componentDidMount() {
    // this.hideMethods();
    // setTimeout(() => {
    //   this.hoverEffect();
    // }, 2000);
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
      // method.addEventListener("mouseover", () => {
      //   pointer.style.animationName = "point";
      // });
    });
  };

  // <Method className="method">
  // </Method>
  // <Pointer
  //   className="pointer"
  //   src="https://res.cloudinary.com/drucvvo7f/image/upload/v1590549754/Portfolio%20Site/Icons/hand-pointer-svgrepo-com_gwg67l.svg"
  // />

  render() {
    return (
      <div>
        <Container>
          <H1 style={{ color: "#fff", marginBottom: "2rem" }}>
            You Can Reach Me Here...
          </H1>
          <Wrapper>
            {this.state.methods.map((method, ind) => (
              <Link
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
      </div>
    );
  }
}

export default Contact;

const Container = styled.div`
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 2px solid red; */
  @media ${device.tablet} {
    margin: 20% 0rem;
  }
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
const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
  border: 1px solid green;
  transition-duration: 0.3s;
  /* max-height: 3.8rem; */
`;
const Method = styled.div`
  opacity: 1;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  animation-fill-mode: backwards;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
`;
const Text = styled.div`
  height: 3.8rem;
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
  border: 2px solid blue;
`;
const Img = styled.img`
  cursor: pointer;
  z-index: 1;
  position: relative;
  top: 3rem;
  left: ${(props) => props.width - 0.2 + "rem"};
  border-radius: 8px;
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
