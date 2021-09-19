import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Articles from './components/Articles/Articles';

// styles
import './App.css';

const ARTICLES_URL =
  'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
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
      <div className='App'>
        <Articles data={data.articles} isFetching={data.isFetching} />
        <header>{<Header />}</header>
        <footer>{<Footer />}</footer>
      </div>
    </>
  );
}

export default App;
