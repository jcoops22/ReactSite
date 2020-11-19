import React from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import galaxy from "../resources/Icons/galaxy.svg";
import galaxy2 from "../resources/Icons/galaxy2.svg";
import galaxylight from "../resources/Icons/galaxylight.svg";

const Spinner = ({ top, width }) => {
  return (
    <Wrapper>
      <Img
        top={top}
        width={width}
        className="load"
        duration={"1.5s"}
        src={galaxy}
        name={"spin"}
      />
      <Img
        top={top}
        width={width}
        className="load"
        duration={"2s"}
        src={galaxylight}
        name={"cycle"}
      />
      <Img
        top={top}
        width={width}
        className="load"
        duration={"2.5s"}
        src={galaxy2}
        name={"cycle2"}
      />
    </Wrapper>
  );
};

export default Spinner;

// styles
const Wrapper = styled.div`
  &:hover {
    transform: scale(1.2);
  }
  position: relative;
  left: 1rem;
  transition-duration: 0.3s;
`;
const Img = styled.img`
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  position: absolute;
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  animation-name: ${(props) => props.name};
  animation-duration: ${(props) => props.duration};
  @media ${device.tablet} {
    margin-top: 15%;
  }
  @media ${device.laptop} {
    /* margin-top: %; */
  }
`;
