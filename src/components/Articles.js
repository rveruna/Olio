import React from 'react';
import { Link } from 'react-router-dom';
// styles
import '../styles/Articles.css';

const Articles = ({ data, isFetching }) => {
  return (
    <div className='container'>
      {isFetching && 'Fetching articles...'}
      {data.map((article) => (
        <div key={article.id} className='card'>
          {article.images.map((image) => (
            <img
              src={image.files.small}
              className='card-image'
              alt={article.title}
            />
          ))}
          <div className='card-content'>
            <Link to={`/article/${article.title}`}>{article.title}</Link>
            <div className='card-text' key={3}>
              {article.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Articles;
