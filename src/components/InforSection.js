import React from "react";
import styled from "styled-components";
import { HomeS1, Description, Image } from "../styles";

const InforSection = () => {
  return (
    <InforSec>
      <div className="infor">
        <p>
          At TechTIQ Solutions, we are your most trusted software development
          company and digital transformation consultant partner and are focused
          on getting projects done accurately, effectively and efficiently.
          Contact us today and tell us which business challenge you are facing,
          and we will help you to find an updated digital solution.
        </p>
      </div>
      <div className="detail">
        <h1>Address</h1>
        <h2>Email</h2>
      </div>
    </InforSec>
  );
};
const InforSec = styled(HomeS1)`
  display: block;
`;
export default InforSection;
