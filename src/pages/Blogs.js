import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";
import blog3 from "../img/blog3.jpg";

const Blogs = () => {
  return (
    <Blog>
      <Picture>
        <h1> Blogs1</h1>
        <div className="line"></div>
        <Link to="/blog1">
          <img src={blog1} alt="blog1post" />
        </Link>
      </Picture>
      <Picture>
        <h1> Blogs2</h1>
        <div className="line"></div>
        <Link to="/blog2">
          <img src={blog2} alt="blog2post" />
        </Link>
      </Picture>
      <Picture>
        <h1> Blogs3</h1>
        <div className="line"></div>
        <Link to="/blog3">
          <img src={blog3} alt="blog3post" />
        </Link>
      </Picture>
      <Picture>
        <h1> Blogs4</h1>
        <div className="line"></div>
        <Link to="/blog4">
          <img src={blog3} alt="blog4post" />
        </Link>
      </Picture>
    </Blog>
  );
};

const Blog = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Picture = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default Blogs;
