import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import SimpleTable from './components/SimpleTable';

// styles
import './App.css';

const ARTICLES_URL =
  'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

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
      <header className='App-header'>
        <img
          src='https://olioex.com/wp-content/uploads/2019/08/logo_olio_white.png'
          className='App-logo'
          alt='logo'
        />
      </header>
      <div className='App'>
        <SimpleTable data={data.articles} isFetching={data.isFetching} />
        <div className='App-link-container'>
          <a
            className='App-link'
            href='https://github.com/rveruna/Olio'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub link | Veronika Rosicova
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
