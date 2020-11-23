import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../resources/mediaquery";

const Card = (props) => {
  // const [showing, setShowing] = useState(true);
  useEffect(() => {
    addEvents();
  });
  // addEvent listeners to images
  const addEvents = () => {
    let images = document.querySelectorAll(".thumbnail");
    let overlay = document.querySelectorAll(".card_overlay");
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
        // overlay[ind].style.maxHeight = "none";
        overlay[ind].style.opacity = 1;
        image.style.opacity = "0.2";
        image.style.transform = "scale(1.2)";
        desc[ind].style.zIndex = "1";
      });
      image.addEventListener("mouseout", () => {
        // overlay[ind].style.maxHeight = "212px";
        overlay[ind].style.opacity = 0;
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
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
        <Overlay className="card_overlay" background={props.project.hover}>
          <Desc className="desc" color={props.project.color}>
            {props.project.desc}
          </Desc>
        </Overlay>
      </Link>
    </Cards>
  );
};

export default Card;

// styles
const Cards = styled.div`
  &:hover {
    box-shadow: 0 0 15px 4px #67cf97;
  }
  position: relative;
  margin: 1rem 0;
  width: 100%;
  max-width: 450px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  @media ${device.tablet} {
    margin: 1rem;
  }
`;
const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
  opacity: 0;
  position: relative;
  z-index: 1;
  -webkit-transition-duration: 0.6s;
  -o-transition-duration: 0.6s;
  transition-duration: 0.6s;
`;
const Desc = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  pointer-events: none;
  max-width: 380px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.1rem;
  line-height: 1.1;
  color: ${(props) => props.color};
  @media ${device.tablet} {
    display: inline;
  }
`;
const Overlay = styled.div`
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15% 1rem 1rem;
  opacity: 0;
  height: 100%;
  max-height: 220px;
  width: 100%;
  background-color: ${(props) => props.background};
`;
