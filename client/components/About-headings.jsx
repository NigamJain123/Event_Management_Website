import React from "react";

const About_headings = ({ heading, sub_heading }) => {
  return (
    <div className="about-heading">
      <h1>{heading}</h1>
      <p>{sub_heading}</p>
    </div>
  );
};

export default About_headings;
