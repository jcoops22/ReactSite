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
          I'm a fullstack web developer in Ogden, UT. I enjoy creating
          websites/applications that are performant, fun, and provide a great
          user experience. I'd love to help build your next project.
        </Intro>
      </Container>
    </div>
  );
};

export default Home;

// styles
const Container = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* height: 15rem; */
  background-color: rgba(0, 5, 5, 0.6);
  border-radius: 8px;
  /* padding: 1rem; */
`;
const Header = styled.h1`
  color: #fff;
  margin: 1rem 0;
`;
const Intro = styled.p`
  width: 100%;
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  line-height: 1.3;
`;
