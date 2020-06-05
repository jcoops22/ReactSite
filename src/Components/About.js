import React, { Component } from "react";
import styled from "styled-components";
import Typer from "./Typer";
import spaceship from "../resources/Icons/spaceship.svg";

class About extends Component {
  state = {
    sentences: [
      "Though originally from North Carolina, I've been living here in Utah for about 5 years now!",
      "I have more than 4 years of experience working in the tech industry. Mostly troubleshooting software issues on the support side of things.",
      "While this has taught me much, builing websites and developing web applications has quickly become something I'm passionate about.",
      "I also love to rock out on my Roland TD-25k electric drum kit and game out on Xbox One and Nintendo Switch.",
      "However, most of the time I'm usually with my wonderful wife or spending time with our family. ",
    ],
  };

  componentDidMount() {
    this.animateSentences();
  }
  animateSentences = () => {
    let sentences = document.querySelectorAll(".sentence");
    console.log("shoulda ran");

    sentences.forEach((sentence, ind) => {
      setTimeout(() => {
        sentence.style.animationName = "slipIn";
      }, `${ind}000`);
    });
  };
  render() {
    return (
      <Container>
        <Typer
          sentence="A little bit about me..."
          underline="false"
          icon="false"
          fontSize={"5vh"}
          delay={1500}
        />
        <Wrapper>
          <Cover />
          <ImgDiv className="animation_div"></ImgDiv>
          <div className="spaceship_wrapper">
            <Img width="40px" src={spaceship} />
          </div>
          {this.state.sentences.map((sentence, ind) => (
            <span key={ind} className="sentence">
              {" "}
              {sentence}
            </span>
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default About;

// styles
const Container = styled.div`
  color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 2rem 0.6rem 0;
  height: 88vh;
`;
const ImgDiv = styled.div`
  animation-name: flyBy;
  animation-direction: forwards;
  animation-iteration-count: 1;
  animation-duration: 10s;
`;
const Img = styled.img`
  position: relative;
  transform: rotate(90deg);
  top: -15vh;
  left: 65%;
  animation-name: fly;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
`;
const Wrapper = styled.div`
  margin-top: 2rem;
`;
const Cover = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1590472333/Portfolio%20Site/keeper1_jnmhie.jpg");
`;
