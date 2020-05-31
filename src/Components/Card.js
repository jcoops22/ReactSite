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
    // on load show images
    images.forEach((image) => {
      image.addEventListener("load", () => {
        image.style.opacity = "1";
      });
    });
    // hover events
    images.forEach((image) => {
      image.addEventListener("mouseover", () => {
        image.style.opacity = "0.4";
        image.style.transform = "scale(1.2)";
      });
      image.addEventListener("mouseout", () => {
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
      });
    });
    // to fix refresh not showing images
    setTimeout(() => {
      images.forEach((image) => {
        image.style.opacity = "1";
      });
    }, 1000);
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
        <Overlay className="overlay">
          <Img
            width="100%"
            height="auto"
            src={props.project.img}
            loading="lazy"
            className="thumbnail"
          />
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
  border: 1px solid green;
  width: 100%;
  max-width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media ${device.tablet} {
    margin: 1rem;
  }
`;
const Name = styled.p`
  color: #fff;
  /* border: 1px solid red; */
`;
const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
  opacity: 0;
  transition-duration: 0.5s;
  /* border: 1px solid red; */
`;
const Desc = styled.div`
  position: relative;
  top: -8rem;
  left: 0;
  margin-top: -5rem;
  transition-duration: 0.3s;
  height: 4rem;
  /* z-index: -1; */
  /* overflow-y: hidden; */
  /* border: 2px solid white; */
  color: #fff;
  max-width: 380px;
  @media ${device.tablet} {
    /* display: none; */
  }
`;
const Overlay = styled.div`
  border: 1px solid green;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
  background-color: red;
  height: 100%;
  width: 100%;
`;
