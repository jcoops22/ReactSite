import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// Component
class Letters extends Component {
  state = {
    word: this.props.word,
    arr: [],
  };
  // create delay array
  setDelay = () => {
    for (let i = 0; i < this.state.word.length; i++) {
      this.state.arr.push(
        `${(Math.round(Math.random()) + Math.random()).toString()}s`
      );
    }
  };
  setTop = (amount) => {
    let top = Math.floor(Math.random() * amount);
    return top + "%";
  };
  render() {
    return (
      <div
        onLoad={this.setDelay()}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "5rem",
          margin: "1rem 0",
        }}
      >
        {this.state.word.split("").map((l, ind) => (
          <Letter
            marginSides={this.props.marginSides}
            key={ind}
            delay={this.state.arr[ind]}
            top={this.setTop(this.props.top)}
          >
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
  margin: 0 ${(props) => props.marginSides};
  top: ${(props) => props.top};
  color: #fff;
  position: relative;
  font-size: 18px;
  font-family: "Liu Jian Mao Cao";
`;
