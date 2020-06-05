import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";
import spaceship from "../resources/Icons/spaceship.svg";
import cometPic from "../resources/Icons/comet.svg";

class About extends Component {
  state = {
    sentences: [
      "Though originally from North Carolina, I've been living here in Utah for about 5 years now!",
      "I have more than 4 years of experience working in the tech industry. Mostly troubleshooting software issues on the support side of things.",
      "While this has taught me much, builing websites and developing web applications has quickly become something I'm passionate about.",
      "I also love to rock out on my Roland TD-25k electric drum kit and game out on Xbox One and Nintendo Switch.",
      "However, most of the time I'm usually with my wonderful wife or spending time with our family. ",
    ],
    comets: [],
  };

  componentDidMount() {
    this.populateComets(8, 100, 12);
    this.animateSentences();
  }
  // slide in sentences
  animateSentences = () => {
    let sentences = document.querySelectorAll(".sentence");
    // list out sentences
    sentences.forEach((sentence, ind) => {
      setTimeout(() => {
        sentence.style.animationName = "slipIn";
      }, `${ind}000`);
    });
  };
  // make comets
  populateComets = (topVal, leftVal, widthVal) => {
    let num = 55;
    let temp = [];
    // populate array of comets
    for (let i = 0; i < num; i++) {
      let setTop = Math.floor(Math.random() * topVal) + "em";
      let setLeft = Math.floor(Math.random() * leftVal) + "%";
      let setWidth = Math.floor(Math.random() * widthVal) + "px";
      temp.push({ top: setTop, left: setLeft, width: setWidth });
    }
    this.setState({ comets: temp });
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
        <div style={{ margin: "3rem 0" }}>
          <Comets>
            {this.state.comets.map((comet, ind) => (
              <Comet
                width={comet.width}
                key={ind}
                top={comet.top}
                left={comet.left}
                src={cometPic}
              />
            ))}
          </Comets>
          <div className="spaceship_wrapper">
            <Img src={spaceship} />
          </div>
        </div>
        <Wrapper>
          <Picture />
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
const Comets = styled.div`
  visibility: hidden;
  position: relative;
  top: -10vh;
  left: 0;
  height: 4rem;
  width: 1000%;
  background-size: contain;
  animation-name: flyBy;
  animation-delay: 6s;
  animation-timing-function: linear;
  animation-direction: forwards;
  animation-iteration-count: infinite;
  animation-duration: 30s;
`;
const Comet = styled.img`
  position: relative;
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const Img = styled.img`
  position: relative;
  transform: rotate(90deg);
  width: 40px;
  top: -15vh;
  left: 65%;
  animation-name: fly;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 3s;
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0.7rem;
  width: 100%;
  @media ${device.tablet} {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 60%;
  }
`;
const Picture = styled.div`
  margin-bottom: 2rem;
  z-index: 1;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1591388976/Portfolio%20Site/keeper1_jfdgtj.jpg");
`;
