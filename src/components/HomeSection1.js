import React from "react";
import home1 from "../img/home1.jpg";
import styled from "styled-components";
import { HomeS1, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const HomeSection1 = () => {
  return (
    <HomeS1>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>YOUR TRUSTED DIGITAL</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>TRANSFORMATION</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>PATNER.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          OvitLab offers a range of product development services which include
          strategy, user experience, cloud architecture, web development & cross
          platform mobile app development for Android & Web apps.
        </motion.p>
        <motion.button variants={fade}>WHO WE ARE </motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="laptops" variants={photoAnimation} />
      </Image>
      <Wave />
    </HomeS1>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;

export default HomeSection1;
