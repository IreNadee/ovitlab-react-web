import React from "react";
import home1 from "../img/home1.jpg";
import { HomeS1, Description, Image } from "../styles";

const HomeSection1 = () => {
  return (
    <HomeS1>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>YOUR TRUSTED DIGITAL</h2>
          </div>
          <div className="hide">
            <h2>TRANSFORMATION</h2>
          </div>
          <div className="hide">
            <h2>PATNER.</h2>
          </div>
        </div>
        <p>
          OvitLab offers a range of product development services which include
          strategy, user experience, cloud architecture, web development & cross
          platform mobile app development for Android & Web apps.
        </p>
        <button>WHO WE ARE </button>
      </Description>
      <Image>
        <img src={home1} alt="laptops" />
      </Image>
    </HomeS1>
  );
};

export default HomeSection1;
