import React from 'react';
import { username, city } from '../data/user'; // Correctly import named exports

const Home = () => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Located in: {city}</p>
    </div>
  );
};

export default Home;

