import React from 'react';
import About from './About'; // Default import
import Home from './Home'; // Default import
import NavBar from './NavBar'; // Default import

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
