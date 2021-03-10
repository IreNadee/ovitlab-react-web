import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const history = useHistory();
  const activePath = history.location.pathname;
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          OvitLab
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/aboutus" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/services">Services</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/services" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/blogs" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/contactus" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  position: sticky;
  background: #134f7c;

  a {
    color: #c4e2f6;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 6rem;
    position: relative;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #c4e2f6;
  width: 4%;
  position: absolute;
  bottom: -80%;

  @media (max-width: 1500px) {
    left: 0%;
  }
`;
export default Nav;
