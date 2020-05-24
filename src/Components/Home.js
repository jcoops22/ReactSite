import React from "react";
import styled from "styled-components";
import Letters from "./Letters";

const Home = () => {
  return (
    <div>
      <Letters />
      <Container>
        <Header>Hello, I'm Jonathan Cooper</Header>
        <Intro>
          I'm a fullstack web developer in Ogden, UT. I love to create and
          innovate web solutions for really cool websites.
        </Intro>
      </Container>
    </div>
  );
};

export default Home;

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Header = styled.h1`
  color: #fff;
  margin: 6rem 0;
`;
const Intro = styled.p`
  width: 90%;
  color: #fff;
  padding: 0%.5rem;
`;
