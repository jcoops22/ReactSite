import React from "react";
import styled from "styled-components";
import star from "../resources/Icons/star.svg";

const Stars = (props) => {
  const shootStars = (id, top) => {
    let star = document.getElementById(`star${id}`);
    let div = document.getElementById(`div${id}`);
    star.style.animationName = "shoot1";
    star.style.top = `${top}`;
    div.style.animationName = "slideIn";
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
        shootStars(props.id, props.top);
      }}
      onMouseOut={() => {
        callStars(props.id);
      }}
    >
      {props.children}
      <div id={`div${props.id}`}>
        <img src={star} id={`star${props.id}`} width="30px" alt="stars" />
      </div>
    </Star>
  );
};
export default Stars;

const Star = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
