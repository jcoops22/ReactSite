import React from "react";
import styled from "styled-components";
import Letters from "./Letters";

const Home = () => {
  return (
    <div>
      <Letters />
      <Header>My Website</Header>
    </div>
  );
};

export default Home;

const Header = styled.h1`
  color: #fff;
  margin: 0;
  position: relative;
  top: 30vh;
`;
