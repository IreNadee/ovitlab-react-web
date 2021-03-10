import React from "react";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import InforSection from "../components/InforSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HomeSection1 />
      <HomeSection2 />
      <InforSection />
    </motion.div>
  );
};

export default Home;
