import React, { useEffect, useState } from "react";
import Credits from "./Credits";
import "../App.css";
import styled from "styled-components";
import { device } from "../resources/mediaquery";
import { Link } from "react-router-dom";
import leftArrow from "../resources/Icons/left-arrow-arrows-svgrepo-com.svg";
import Stars from "./Stars";

// Component
const Navbar = ({ change }) => {
  const [expanded, setExpanded] = useState(false);
  const [navItems] = useState([
    "Home",
    "About",
    "Contact",
    "Projects",
    "Resume",
  ]);
  const [places] = useState([
    "Check out my projects",
    "Learn more 'About' me",
    "Contact me",
  ]);
  // functions
  useEffect(() => {
    explore();
  }, [expanded]);

  const animateBerg = () => {
    // remove animation for "explore"
    let explore = document.querySelector(".explore");
    explore.style.display = "none";
    explore.style.animationName = "none";
    // animate the links
    let a = document.querySelectorAll(".tag");
    // slide in links
    setTimeout(() => {
      if (!expanded) {
        a.forEach((a, ind) => {
          a.style.transitionDuration = "0.4s";
          a.style.transitionDelay = `${ind}00ms`;
          a.style.top = `calc(85% - ${ind * 15}%)`;
          a.style.opacity = 1;
        });
      } else {
        a.forEach((a) => {
          a.style.opacity = 0;
          a.style.top = "-10vh";
        });
      }
    }, 1000);
    // animate the burger
    let berg = document.querySelector(".burger");
    let patty1 = document.querySelector(".patty1");
    let patty2 = document.querySelector(".patty2");
    let overlay = document.querySelector(".overlay");

    if (!expanded) {
      berg.style.transform = "rotate(137deg)";
      patty1.style.transform = "rotate(-90deg)";
      patty1.style.top = "17px";
      patty2.style.top = "14px";
      setTimeout(() => {
        !expanded
          ? (overlay.style.display = "initial")
          : (overlay.style.display = "none");
        berg.style.left = "calc(100% - 44px)";
        setExpanded(true);
      }, 600);
    } else {
      berg.style.transform = "rotate(0deg)";
      patty1.style.transform = "rotate(0deg)";
      patty1.style.top = "12px";
      patty2.style.top = "19px";
      setTimeout(() => {
        berg.style.left = "1rem";
      }, 600);
      setTimeout(() => {
        !expanded
          ? (overlay.style.display = "initial")
          : (overlay.style.display = "none");
        setExpanded(false);
      }, 1600);
    }
  };

  // get the random phrase to check out
  const phrase = () => {
    return places[Math.floor(Math.random() * 3)];
  };
  // checkout something
  const explore = () => {
    let explore = document.querySelector(".explore");
    setTimeout(() => {
      explore.style.display = "flex";
      explore.style.animationName = "shift";
    }, 12000);
  };
  // RENDER

  return (
    <div className="navDiv">
      <Burger
        className="burger"
        onClick={() => {
          animateBerg();
        }}
      >
        <Pat1 className="patty1" />
        <Pat2 className="patty2" />
      </Burger>

      <Explore className="explore">
        <Icon width={1.3} src={leftArrow} alt="arrow" />
        {phrase()}
      </Explore>

      <Credits />
      <Overlay className="overlay" onClick={() => animateBerg()} />
      <List>
        {navItems.map((item, ind) => (
          <Lnk
            key={ind}
            className="tag"
            onClick={() => {
              animateBerg();
              change();
            }}
          >
            <Link
              className="link"
              to={item === "Home" ? "/" : item.toLowerCase()}
            >
              <Stars id={item.toLowerCase()} top={"0.7rem"}>
                {item}
              </Stars>
            </Link>
          </Lnk>
        ))}
      </List>
    </div>
  );
};

export default Navbar;

// styles
const List = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: relative;
  top: 35rem;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Lnk = styled.span`
  transition-duration: 0.3s;
  position: fixed;
  z-index: 100;
  top: -10vh;
  left: 1rem;
  opacity: 0;
  height: 3rem;
  width: 5rem;
  margin: 0.5rem;
  @media ${device.tablet} {
    &:hover {
      width: 6rem;
      transform: scale(1.3);
    }
  }
`;
const Burger = styled.div`
  &:focus {
    outline: none;
  }
  cursor: pointer;
  -webkit-box-sizing: initial;
  box-sizing: initial;
  position: fixed;
  top: 90vh;
  left: 1rem;
  z-index: 100;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  transition-delay: 0.4s;
  opacity: 1;
  border: 2px solid #fff;
  @media ${device.tablet} {
    /* display: none; */
  }
`;
const Pat1 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 12px;
  border-radius: 20px;
`;
const Pat2 = styled.div`
  height: 3px;
  width: 80%;
  position: relative;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  left: 3px;
  background-color: #fff;
  top: 19px;
  border-radius: 20px;
`;
const Overlay = styled.div`
  display: none;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;
const Explore = styled.span`
  position: absolute;
  width: 12rem;
  font-size: 0.8rem;
  top: 91vh;
  left: calc(0% + 7rem);
  color: #fff;
  padding-left: 0.5rem;
  display: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
`;
const Icon = styled.img`
  width: ${(props) => props.width + "rem"};
`;
