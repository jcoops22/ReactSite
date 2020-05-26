import React, { useEffect } from "react";
import "../App.css";
import arrow from "../resources/Icons/arrow.svg";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

const Typer = (props) => {
  // animate typing
  const startTyping = () => {
    let char = document.querySelectorAll(".letter");
    setTimeout(() => {
      char.forEach((letter) => {
        letter.style.animationName = "typing";
      });
      char[char.length - 1].addEventListener("webkitAnimationEnd", () => {
        let underline = document.querySelector(".underline");
        let icon = document.querySelector(".icon");
        icon.style.opacity = "1";
        underline.style.width = "100%";
        if (window.innerWidth < 768) {
          let wrapper = document.querySelector(".wrapper");
          wrapper.style.textAlign = "center";
        }
      });
    }, 3000);
  };
  // call functions on component mount
  useEffect(() => {
    startTyping();
  }, []);

  return (
    <div>
      <div className="wrapper" style={{ transitionDuration: "1s" }}>
        {props.sentence.split("").map((letter, ind) => (
          <Type delay={ind * 100 + "ms"} className="letter" key={ind}>
            {letter}
          </Type>
        ))}
        <Underline className="underline" />
      </div>
      <Icon className="icon" src={arrow} />
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
  animation-iteration-count: 1;
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
  transform: rotate(180deg);
  @media ${device.mobileM} {
    display: initial;
  }
`;
