import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from '../components/Article';
import ArticlesPage from '../pages/ArticlesPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const Page = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/articles' component={ArticlesPage} />
      <Route path='/article/:id' component={Article} />
      <Route path='/contact' component={ContactPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
