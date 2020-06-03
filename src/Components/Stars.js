import React from "react";
import styled from "styled-components";

const Stars = (props) => {
  return (
    <Star top={props.top} left={props.left}>
      <H1>Stars</H1>
    </Star>
  );
};
export default Stars;

const Star = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const H1 = styled.h1`
  color: #fff;
  font-size: 4vw;
`;
