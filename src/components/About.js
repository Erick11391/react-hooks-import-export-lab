import React from 'react';
import { image } from '../data/user'; // Correctly import named export

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={`/images/${image}`} alt="Profile" />
    </div>
  );
};

export default About;
