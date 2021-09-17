import React from 'react';

const SimpleTable = ({ data, isFetching }) => {
  return (
    <div>
      {isFetching && 'Fetching articles...'}
      {data.map((article) => (
        <tr key={article.id}>
          <td key={2}>{article.title}</td>
          <td key={3}>{article.description}</td>
        </tr>
      ))}
    </div>
  );
};
export default SimpleTable;
