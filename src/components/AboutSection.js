import React from "react";
import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
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
      </div>
      <div className="image">
        <img src={home1} alt="laptops" />
      </div>
    </div>
  );
};

export default AboutSection;
