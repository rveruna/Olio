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
          <div key={2}>{article.title}</div>
          <div key={3}>{article.description}</div>
        </div>
      ))}
    </div>
  );
};
export default Articles;
