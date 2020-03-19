import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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
  animation-delay: ${props => props.delay};
  margin: 0 1rem;
  color: #fff;
  position: relative;
  top: ${props => props.top};
  font-size: 28px;
  font-family: "Liu Jian Mao Cao";
`;

// Component
class Letters extends Component {
  state = {
    word: "WELCOME",
    arr: []
  };
  setDelay = () => {
    for (let i = 0; i < this.state.word.length; i++) {
      this.state.arr.push(
        `${(Math.round(Math.random()) + Math.random()).toString()}s`
      );
    }
  };
  render() {
    return (
      <div onLoad={this.setDelay()}>
        {this.state.word.split("").map((l, ind) => (
          <Letter key={ind} delay={this.state.arr[ind]} top="12vh">
            {l}
          </Letter>
        ))}
      </div>
    );
  }
}

export default Letters;
