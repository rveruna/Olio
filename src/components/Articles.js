import React from 'react';

// styles
import './Articles.css';

// function rowClassNameFormat(row, rowIdx) {
//   return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
// }

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
            <h2 className='card-title' key={2}>
              {article.title}
            </h2>
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
