import React, { Component } from "react";
import styled from "styled-components";
import Typer from "./Typer";

class About extends Component {
  state = {
    sentences: [
      "Though originally from North Carolina, I've been living here in Utah for about 5 years now!",
      "I have 5+ years experience working in the tech industry. Mostly solving problems in software on the support side.",
      "Coding/development is not only one of my favorite hobbies, its my livelyhood!",
      "I also love to rock out on my Roland TD-25k electric drum kit and I also game out on Xbox One and Nintendo Switch.",
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
      sentence.style.animationDelay = `${ind}000`;
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

        {this.state.sentences.map((sentence, ind) => (
          <p key={ind} className="sentence">
            {sentence}
          </p>
        ))}
      </Container>
    );
  }
}

export default About;

// styles
const Container = styled.div`
  color: #fff;
  overflow-x: hidden;
`;
