import React from "react";
import styled from "styled-components";

const Name = () => {
  return (
    <Container>
      <H1>Jonathan Cooper</H1>
    </Container>
  );
};

export default Name;

// styles
const Container = styled.div`
  width: 100%;
`;
const H1 = styled.h1`
  color: #fff;
`;
