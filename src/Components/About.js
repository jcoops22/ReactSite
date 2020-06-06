import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";
import spaceship from "../resources/Icons/spaceship.svg";
import cometPic from "../resources/Icons/comet.svg";

class About extends Component {
  state = {
    sentences: [
      "Though I'm originally from North Carolina, I've been living here in Utah for about 5 years now.",
      "I have more than 4 years of experience working in the tech industry, mostly troubleshooting software issues.",
      "While this has taught me much, builing websites and developing web applications has quickly become a passion of mine.",
      "When I'm not neck deep in code, I'm probably gaming on Xbox One or the Nintendo Switch. Sometimes I'm also jamming out on my electric drum kit.",
      "Most of the time, however, I'm usually with my wonderful wife or spending time with our family.",
    ],
    comets: [],
  };

  componentDidMount() {
    // slide to the paragraph
    setTimeout(() => {
      if (window.innerWidth > 768) {
        document.getElementById("bottom").scrollIntoView();
      }
    }, 7000);
    this.populateComets(8, 100, 42);
    this.animateSentences();
  }
  // slide in sentences
  animateSentences = () => {
    let sentences = document.querySelectorAll(".sentence");
    // list out sentences
    sentences.forEach((sentence, ind) => {
      setTimeout(() => {
        sentence.style.animationName = "slipIn";
      }, `${ind}00`);
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
        <div>
          <Typer
            sentence="A little bit about me..."
            underline="false"
            icon="false"
            fontSize={"5vh"}
            delay={1500}
          />
        </div>
        <div className="animationWrapper">
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
          <div>
            {this.state.sentences.map((sentence, ind) => (
              <span key={ind} className="sentence">
                {" "}
                {sentence}
              </span>
            ))}
          </div>
          <span id="bottom"></span>
          <p style={{ marginTop: "1rem" }}>
            Please feel free to{" "}
            <u>
              <Link to="/contact">Contact me</Link>
            </u>
          </p>
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
  -webkit-animation-name: flyBy;
  animation-name: flyBy;
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
`;
const Comet = styled.img`
  position: relative;
  transform: rotate(135deg);
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const Img = styled.img`
  position: relative;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  width: 40px;
  top: -15vh;
  left: 65%;
  -webkit-animation-name: fly;
  animation-name: fly;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0.7rem;
  width: 100%;
  @media ${device.tablet} {
    max-width: 60%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media ${device.laptop} {
    margin-top: 9vh;
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
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
`;
