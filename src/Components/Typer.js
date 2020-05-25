import React, { useEffect } from "react";
import "../App.css";
import styled from "styled-components";

const Typer = (props) => {
  // animate typing
  const addName = () => {
    let char = document.querySelectorAll(".letter");
    setTimeout(() => {
      char.forEach((letter) => {
        letter.style.animationName = "typing";
      });
      char[char.length - 1].addEventListener("webkitAnimationEnd", () => {
        let wrapper = document.querySelector(".typer_wrapper");
        wrapper.style.borderBottom = "1px solid #fff";
      });
    }, 3000);
  };
  // call functions on component mount
  useEffect(() => {
    addName();
  }, []);

  return (
    <div className="typer_wrapper">
      {props.sentence.split("").map((letter, ind) => (
        <Type delay={ind * 200 + "ms"} className="letter" key={ind}>
          {letter}
        </Type>
      ))}
    </div>
  );
};

export default Typer;

// styles
const Type = styled.span`
  /* color: #e5e8a9; */
  color: #fff;
  visibility: hidden;
  transition-duration: 1s;
  animation-name: none;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay};
`;
