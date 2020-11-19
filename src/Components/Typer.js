import React, { useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import Spinner from "./Spinner";

const Typer = (props) => {
  // animate typing
  const startTyping = () => {
    // get the letters
    let char = document.querySelectorAll(".letter");
    setTimeout(() => {
      char.forEach((letter) => {
        letter.style.animationName = "typing";
      });
      char[char.length - 1].addEventListener("webkitAnimationEnd", () => {
        // after the last letter add underline and arrow icon or not
        let underline = document.querySelector(".underline");
        let icon = document.querySelector(".icon");
        // do checks based on props
        // show the icon
        if (props.icon === "true") {
          icon.style.opacity = "1";
        }
        // underline
        if (props.underline === "true") {
          underline.style.width = "100%";
        }
      });
    }, props.delay);
  };
  // call functions on component mount
  useEffect(() => {
    startTyping();
  });

  return (
    <div>
      <div
        className="wrapper"
        style={{ transitionDuration: "1s", textAlign: "center" }}
      >
        {props.sentence.split("").map((letter, ind) => (
          <Type
            style={{
              fontSize: props.fontSize,
              repeat: props.repeat,
            }}
            delay={ind * 100 + "ms"}
            className="letter"
            key={ind}
          >
            {letter}
          </Type>
        ))}
        <Underline className="underline" />
        <Icon className="icon">
          <Spinner top={"-2rem"} width={"1.7rem"} />
        </Icon>
      </div>
    </div>
  );
};

export default Typer;

// styles
const Type = styled.span`
  position: relative;
  color: #fff;
  /* color: #00ff00; */
  visibility: hidden;
  -webkit-transition-duration: 1s;
  -o-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-animation-name: none;
  animation-name: none;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  font-family: "Chelsea Market", cursive;
  animation-delay: ${(props) => props.delay};
`;
const Underline = styled.div`
  -webkit-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;
  margin-top: 8px;
  position: relative;
  width: 0;
  height: 3px;
  background-color: #fff;
  display: none;
  @media ${device.mobileM} {
    display: block;
  }
`;
const Icon = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
  transition-duration: 1.4s;
  /* border: 1px solid red; */
`;
// const Icon = styled.img`
//   display: none;
//   -webkit-transition-duration: 0.8s;
//   -o-transition-duration: 0.8s;
//   transition-duration: 0.8s;
//   position: relative;
//   width: 1.4rem;
//   top: -2rem;
//   left: 104%;
//   opacity: 0;
//   -webkit-animation-name: twist;
//   animation-name: twist;
//   -webkit-animation-duration: 1.6s;
//   animation-duration: 1.6s;
//   -webkit-animation-fill-mode: backwards;
//   animation-fill-mode: backwards;
//   -webkit-animation-iteration-count: infinite;
//   animation-iteration-count: infinite;
//   @media ${device.mobileL} {
//     display: initial;
//   }
// `;
