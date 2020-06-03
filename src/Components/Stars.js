import React from "react";
import styled from "styled-components";
import star1 from "../resources/Icons/stars1.svg";
import star2 from "../resources/Icons/stars2.svg";
import star3 from "../resources/Icons/stars3.svg";
import star4 from "../resources/Icons/stars4.svg";

const Stars = (props) => {
  const shootStars = () => {
    let star1 = document.getElementById("star1");
    let star2 = document.getElementById("star2");
    let star3 = document.getElementById("star3");
    let star4 = document.getElementById("star4");
    star1.style.animationName = "shoot1";
    console.log("you hovered");
  };
  const callStars = () => {
    let star1 = document.getElementById("star1");
    let star2 = document.getElementById("star2");
    let star3 = document.getElementById("star3");
    let star4 = document.getElementById("star4");
    star1.style.animationName = "none";
  };
  // <img src={star2} id="star2" width="30px" />
  //   <img src={star3} id="star3" width="30px" />
  //   <img src={star4} id="star4" width="30px" />
  return (
    <Star
      top={props.top}
      left={props.left}
      onMouseOver={shootStars}
      onMouseOut={callStars}
    >
      {props.children}
      <img src={star1} id="star1" width="30px" />
    </Star>
  );
};
export default Stars;

const Star = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid red;
  top: 0;
  left: 0;
  /* top: ${(props) => props.top};
  left: ${(props) => props.left}; */
`;
