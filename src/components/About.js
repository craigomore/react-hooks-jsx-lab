import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I’m a passionate developer who enjoys building interactive, user-friendly
        web applications and learning new technologies.
      </p>
      <img src={image} alt="I made this" ></img>
    </div>
  );
}

export default About;
