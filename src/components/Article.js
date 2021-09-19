import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ match }) => {
  return (
    <>
      <h1>{match.params.id}</h1>
      <Link to='/articles'>Back to list of articles</Link>
    </>
  );
};

export default Article;
