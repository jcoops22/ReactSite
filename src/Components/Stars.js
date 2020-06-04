import React from "react";
import styled from "styled-components";
import star from "../resources/Icons/star.svg";

const Stars = (props) => {
  const shootStars = (id) => {
    let star = document.getElementById(`star${id}`);
    let div = document.getElementById(`div${id}`);
    star.style.animationName = "shoot1";
    div.style.animationName = "shoot2";
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
      <ImgWrapper id={`div${props.id}`}>
        <img src={star} id={`star${props.id}`} width="30px" />
      </ImgWrapper>
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
const ImgWrapper = styled.div``;
