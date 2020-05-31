import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../resources/mediaquery";

const Card = (props) => {
  const [showing, setShowing] = useState(true);
  useEffect(() => {
    addEvents();
  });
  // addEvent listeners to images
  const addEvents = () => {
    let images = document.querySelectorAll(".thumbnail");
    let overlay = document.querySelectorAll(".overlay");
    let desc = document.querySelectorAll(".desc");
    // on load show images
    images.forEach((image) => {
      image.addEventListener("load", () => {
        image.style.opacity = "1";
      });
    });
    // to fix refresh not showing images
    setTimeout(() => {
      images.forEach((image) => {
        image.style.opacity = "1";
      });
    }, 1000);
    // hover events
    images.forEach((image, ind) => {
      image.addEventListener("mouseover", () => {
        image.style.opacity = "0.4";
        image.style.transform = "scale(1.2)";
        overlay[ind].style.background = "red";
        desc[ind].style.zIndex = "1";
      });
      image.addEventListener("mouseout", () => {
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
        overlay[ind].style.background = "transparent";
        desc[ind].style.zIndex = "-1";
      });
    });
  };
  return (
    <Cards className="card">
      <Link
        to={{
          pathname: "/show",
          state: {
            project: props.project,
          },
        }}
      >
        <Img
          width="100%"
          height="auto"
          src={props.project.img}
          loading="lazy"
          className="thumbnail"
        />
        <Overlay className="overlay">
          <Desc className="desc">{props.project.desc}</Desc>
        </Overlay>
      </Link>
    </Cards>
  );
};

export default Card;

// styles
const Cards = styled.div`
  position: relative;
  margin: 1rem 0;
  /* border: 1px solid yellow; */
  width: 100%;
  max-width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  overflow: hidden;
  @media ${device.tablet} {
    margin: 1rem;
  }
`;
const Name = styled.p`
  color: #fff;
`;
const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
  opacity: 0;
  position: relative;
  z-index: 1;
  transition-duration: 0.5s;
`;
const Desc = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 10%;
  transition-duration: 0.3s;
  pointer-events: none;
  color: #fff;
  max-width: 380px;
  z-index: -1;
  @media ${device.tablet} {
    display: inline;
  }
`;
const Overlay = styled.div`
  transition-duration: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  height: 100%;
  width: 100%;
`;
