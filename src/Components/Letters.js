import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// Component
class Letters extends Component {
  state = {
    word: "WELCOME",
    arr: [],
  };
  setDelay = () => {
    for (let i = 0; i < this.state.word.length; i++) {
      this.state.arr.push(
        `${(Math.round(Math.random()) + Math.random()).toString()}s`
      );
    }
  };
  setTop = () => {
    let top = Math.floor(Math.random() * 5);
    return top + "vh";
  };
  render() {
    return (
      <div
        onLoad={this.setDelay()}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {this.state.word.split("").map((l, ind) => (
          <Letter key={ind} delay={this.state.arr[ind]} top={this.setTop}>
            {l}
          </Letter>
        ))}
      </div>
    );
  }
}

export default Letters;

// styles
const shimmer = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
const Letter = styled.span`
  animation: ${shimmer} 5s ease-out infinite;
  animation-delay: ${(props) => props.delay};
  margin: 0 5vw;
  color: #fff;
  position: relative;
  top: ${(props) => props.top};
  font-size: 18px;
  font-family: "Liu Jian Mao Cao";
`;
