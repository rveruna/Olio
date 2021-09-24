import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Articles.css';

const Articles = ({ data, isFetching }) => {
  return (
    <div className='container'>
      {isFetching && 'Fetching articles...'}
      {data.map((article) => (
        <Link to={`/article/${article.title}`}>
          <div key={article.id} className='card'>
            {article.images.map((image) => (
              <img
                src={image.files.medium}
                className='card-image'
                alt={article.title}
              />
            ))}
            <div className='card-content'>
              <div className='card-title'>{article.title}</div>
              <div className='card-text' key={3}>
                {article.description}
              </div>
              <div className='user-info'>
                Posted by: {article.user.first_name}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Articles;
