import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import Page from './layouts/Page';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <header>{<Header />}</header>
        <main>
          <section className='page'>{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
