import React from "react";
import home2 from "../img/home2.jpg";
import { HomeS1, Description, Image } from "../styles";
import styled from "styled-components";

const HomeSection2 = () => {
  return (
    <HomeS2>
      <Description>
        <p>
          Digitisation has emerged as the primary driver of great transformation
          all over the world, and it offers business with plenty of
          opportunities for sustained growth, monetary gain and enhanced
          customer service delivery. Our comprehensive digital transformation
          services help your business in delivering continual technology and
          business transformation at scale and speed. Our engineers and analysts
          ensure that your digital transformation strategy creates concrete
          business results, like reduced operational costs, enhanced customer
          engagement and increased revenues.
        </p>
      </Description>
      <Image>
        <img src={home2} alt="home 2 pic" />
      </Image>
    </HomeS2>
  );
};

const HomeS2 = styled(HomeS1)`
  background: #daedfb;
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export default HomeSection2;
