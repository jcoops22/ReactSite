import React from "react";
import styled, { keyframes } from "styled-components";
import star from "../resources/Icons/star.svg";

const Stars = (props) => {
  const shootStars = (id) => {
    let star = document.getElementById(`star${id}`);
    let div = document.getElementById(`div${id}`);
    star.style.animationName = "shoot1";
    div.style.animationName = "slideIn";
    console.log("you hovered");
  };
  const callStars = (id) => {
    let star = document.getElementById(`star${id}`);
    let div = document.getElementById(`div${id}`);
    star.style.animationName = "none";
    div.style.animationName = "none";
  };

  return (
    <Star
      onMouseOver={() => {
        shootStars(props.id);
      }}
      onMouseOut={() => {
        callStars(props.id);
      }}
    >
      {props.children}
      <div id={`div${props.id}`}>
        <img src={star} id={`star${props.id}`} width="30px" />
      </div>
    </Star>
  );
};
export default Stars;

const Star = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`;
