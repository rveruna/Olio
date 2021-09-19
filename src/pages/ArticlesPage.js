import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Articles from '../components/Articles';

const ArticlesPage = () => {
  const ARTICLES_URL =
    'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

  const [data, setData] = useState({ articles: [], isFetching: false });
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setData({ articles: data.articles, isFetching: true });
        const response = await axios.get(ARTICLES_URL);
        setData({ articles: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ articles: data.articles, isFetching: false });
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
      <h2>Newest articles</h2>
      <Articles data={data.articles} isFetching={data.isFetching} />
    </>
  );
};

export default ArticlesPage;
