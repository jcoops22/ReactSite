import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

const Card = (props) => {
  const [showing, setShowing] = useState(true);
  useEffect(() => {
    showMore();
  }, []);
  const showMore = () => {
    let more = document.querySelectorAll(".more");
    let desc = document.querySelectorAll(".desc");

    more.forEach((more, ind) => {
      more.addEventListener("click", () => {
        setShowing(!showing);
        showing
          ? (desc[ind].style.height = "auto")
          : (desc[ind].style.height = "4rem");
      });
    });
  };
  return (
    <Cards>
      <div>
        <Name>{props.project.name}</Name>
        <Img width="100%" src={props.project.img} />
      </div>
      <Desc className="desc">
        {props.project.desc.length}
        {props.project.desc}
        <More
          onClick={() => showMore()}
          className="more"
          show={props.project.desc.length > 10 ? "block" : "none"}
        >
          {showing ? "Show More" : "Show Less"}
        </More>
      </Desc>
    </Cards>
  );
};

export default Card;

// styles
const Cards = styled.div`
  margin: 1rem 0;
  border: 1px solid green;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.p`
  color: yellow;
  border: 1px solid red;
`;
const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
  border: 1px solid red;
`;
const Desc = styled.div`
  transition-duration: 0.3s;
  position: relative;
  height: 4rem;
  overflow-y: hidden;
  border: 2px solid white;
  color: #fff;
  max-width: 380px;
`;
const More = styled.span`
  display: ${(props) => props.show};
  color: red;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 2rem;
  border: 1px solid green;
  text-align: center;
  position: relative;
  z-index: 0;
  top: calc(100% - 5rem);
  cursor: pointer;
`;
