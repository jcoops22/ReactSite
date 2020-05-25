import React from "react";
import styled, { keyframes } from "styled-components";

const Typer = (props) => {
  return (
    <div>
      {props.sentence.split("").map((letter, ind) => (
        <Type delay={ind * 200 + "ms"} key={ind}>
          {letter}
        </Type>
      ))}
    </div>
  );
};

export default Typer;

// styles
const typing = keyframes`
    to {
      visibility: visible;
    }
  `;
const Type = styled.span`
  color: #e5e8a9;
  visibility: hidden;
  transition-duration: 1s;
  animation: ${typing} 1s ease-out 1;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay};
`;
