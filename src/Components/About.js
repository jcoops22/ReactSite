import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Typer from "./Typer";
import spaceship from "../resources/Icons/spaceship.svg";
import cometPic from "../resources/Icons/comet.svg";

class About extends Component {
  state = {
    comets: [],
  };

  componentDidMount() {
    let wrapper = document.querySelector("#about_wrapper");
    // slide to the paragraph
    this.populateComets(8, 100, 42);
    // if mobile slide into view
    return window.innerWidth < 768
      ? setTimeout(() => {
          wrapper.scrollIntoView({ behavior: "smooth" });
        }, 7000)
      : null;
  }

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
        <TyperWrapper>
          <Typer
            sentence="A little bit about me..."
            underline="false"
            icon="false"
            fontSize={"5vh"}
            delay={1500}
          />
        </TyperWrapper>
        <AnimationWrapper className="animationWrapper">
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
            <Ship src={spaceship} />
          </div>
        </AnimationWrapper>
        <Wrapper id="about_wrapper">
          <Picture />
          <Bio>
            <span>Though I'm originally from North Carolina </span>, I've been
            living here in Utah for about 6 years now. I have almost 5 years of
            experience working in the tech industry, mostly troubleshooting
            software issues. While this has taught me much, builing websites and
            developing web applications has quickly become a passion of mine.
            Over the last three years I've taught myself code through various
            online tutorials and most recently the{" "}
            <a
              href="https://www.devpointlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevPoint Labs
            </a>{" "}
            bootcamp (Salt Lake City). When I'm not neck deep in code, I'm
            probably spending time with my family, playing the drums or gaming
            with friends.
          </Bio>
        </Wrapper>
      </Container>
    );
  }
}

export default About;

// styles
const Container = styled.div`
  position: relative;
  color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 88vh;
  padding-top: 1rem;
  /* border: 1px solid red; */
`;
const TyperWrapper = styled.div`
  margin-top: 1rem;
  /* border: 1px solid red; */
`;
const AnimationWrapper = styled.div`
  margin-bottom: 2rem;
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
  /* border: 1px solid red; */
`;
const Comet = styled.img`
  position: relative;
  transform: rotate(135deg);
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const Ship = styled.img`
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
  /* border: 1px solid blue; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.7rem;
  width: 100%;
  overflow-x: hidden;
  /* border: 1px solid green; */

  @media ${device.tablet} {
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media ${device.laptop} {
    margin-top: 9vh;
  }
`;
const Picture = styled.div`
  position: relative;
  z-index: 1;
  left: 0;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-size: cover;
  animation: slideInFromLeft 0.8s backwards;
  animation-delay: 3s;
  background-image: url("https://res.cloudinary.com/drucvvo7f/image/upload/v1606713593/Portfolio%20Site/Background%20Pics/LinkedIn_xi1shg.jpg");
  box-shadow: 0 0 25px 4px #fff;
  /* border: 1px solid blue; */
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }

  @keyframes slideInFromLeft {
    from {
      left: -100%;
    }
  }
`;
const Bio = styled.div`
  position: relative;
  left: 0;
  color: #fff;
  padding: 0.7rem;
  width: 100%;
  line-height: 1.5;
  font-size: 1rem;
  font-family: "Josefin Sans", sans-serif;
  animation: slideInFromRight 0.8s backwards;
  animation-delay: 3s;
  /* border: 1px solid red; */

  a {
    &:hover {
      text-decoration: underline;
    }
    color: #67cf97;
  }

  span {
    font-size: 2rem;
    color: #67cf97;
    font-weight: bolder;
    font-family: "Josefin Sans", sans-serif;
  }

  @media ${device.tabletS} {
    font-size: 1.4rem;
    width: 50%;
  }

  @keyframes slideInFromRight {
    from {
      left: 100%;
    }
  }
`;
