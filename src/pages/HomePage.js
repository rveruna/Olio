import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Olio React page</h1>
      <p>
        Click on <Link to='/articles'>Articles</Link> to see what is shared
        today
      </p>
    </>
  );
};

export default HomePage;
