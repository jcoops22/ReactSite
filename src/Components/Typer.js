import React, { useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

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
      </div>
      <Icon
        className="icon"
        src="https://res.cloudinary.com/drucvvo7f/image/upload/v1590472301/Portfolio%20Site/arrow_uvf7cw.svg"
      />
    </div>
  );
};

export default Typer;

// styles
const Type = styled.span`
  position: relative;
  color: #fff;
  visibility: hidden;
  transition-duration: 1s;
  animation-name: none;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  /* animation-iteration-count: ${(props) => props.repeat}; */
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay};
  font-family: "Chelsea Market", cursive;
`;
const Underline = styled.div`
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
const Icon = styled.img`
  display: none;
  transition-duration: 0.8s;
  position: relative;
  width: 1.4rem;
  top: -2rem;
  left: 104%;
  opacity: 0;
  animation-name: twist;
  animation-duration: 1.6s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  @media ${device.mobileL} {
    display: initial;
  }
`;
