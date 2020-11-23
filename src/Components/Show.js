import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Stars from "./Stars";
import ReactPlayer from "react-player/lib";

const Show = (props) => {
  const project = props.location.state.project;
  const [loading, setLoading] = useState(true);
  const [gitIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1605854965/Portfolio%20Site/Icons/github-svgrepo-com_ce9o9l.svg"
  );
  const [siteLink] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1606111633/Portfolio%20Site/Icons/external-svgrepo-com_exwjzd.svg"
  );

  useEffect(() => {}, [loading]);

  const ready = () => {
    setLoading(false);
  };

  return (
    <Container>
      <Link to="/projects">
        <BackButtonDiv>
          <Stars id={"back"} top={"1.4rem"} color="#fff">
            <Button bg="#67cf97">Back</Button>
          </Stars>
        </BackButtonDiv>
      </Link>
      <H1>{project.name}</H1>
      <Wrapper>
        <Desc>
          {project.desc}
          <Tech>
            <h4 style={{ margin: "1rem 0" }}>Technologies:</h4>
            <TechList>
              {project.technologies.map((tech, ind) => (
                <li key={ind}>{tech}</li>
              ))}
            </TechList>
          </Tech>
        </Desc>

        <LoadingContainer colors={loading ? "0, 0, 0, 0.7" : "0, 0, 0, 0"}>
          {loading ? (
            <LoadingWrapper opacity={loading ? "1" : "0"}>
              <Spinner width={"2.7rem"} />
            </LoadingWrapper>
          ) : null}
        </LoadingContainer>

        <Vid className="vid">
          <ReactPlayer
            controls={true}
            id="react_p"
            className="react_player"
            onReady={ready}
            playing={true}
            url={project.video}
            width="100%"
            height="100%"
          />
        </Vid>
      </Wrapper>
      <ButtonsWrapper>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <ProjectButton bg="#fff">
              GitHub repo <img src={gitIcon} alt="github" />
            </ProjectButton>
          </a>
        ) : null}
        {project.site ? (
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <ProjectButton bg="#4287f5" color="#fff">
              Visit site <img src={siteLink} alt="site link" />
            </ProjectButton>
          </a>
        ) : null}
      </ButtonsWrapper>
    </Container>
  );
};

export default Show;

// styles
const Container = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  padding: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  /* border: 1px solid red; */
  @media ${device.laptop} {
    width: 80%;
  }
`;
const BackButtonDiv = styled.div`
  height: 4rem;
  width: 8rem;
`;
const Button = styled.button`
  &:focus {
    outline-color: #67cf97;
  }
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 5rem;
  height: 8rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;
const H1 = styled.h1`
  color: white;
  top: 0;
  margin: 1rem 0;

  @media ${device.tablet} {
    position: -webkit-sticky;
    position: sticky;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */

  @media ${device.tablet} {
    margin-top: 2rem;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;
const Desc = styled.div`
  color: #fff;
  margin: 3rem;
  font-family: "Goldman", cursive;

  @media ${device.tablet} {
    width: 40%;
    margin: 0rem auto;
    padding: 2rem 1rem;
    line-height: 1.4;
    /* border: 1px solid green; */
  }
  @media ${device.laptop} {
    margin-left: auto;
  }
`;
const Tech = styled.div`
  padding: 1rem;
`;
const TechList = styled.ul`
  margin-left: 3rem;

  li {
    font-family: "Goldman", cursive;
  }
`;
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  transition-duration: 0.8s;
  background-color: rgba(${(props) => props.colors});
  /* border: 1px solid red; */
`;
const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
const Vid = styled.div`
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  position: relative;
  width: 100%;
  margin-right: 0.6rem;
  box-shadow: 0 0 25px 4px #fff;
  /* border: 6px solid blue; */

  @media ${device.tablet} {
    width: 70%;
  }
`;
const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 2rem;
  /* border: 1px solid cornflowerblue; */
`;
const ProjectButton = styled.button`
  &:focus {
    outline-color: #67cf97;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 4rem;
  min-height: 3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  padding: 0 0.7rem;
  font-family: "Goldman", cursive;
  border-radius: 5px;
  border: none;

  img {
    width: 20px;
    margin-left: 0.5rem;
  }
`;
