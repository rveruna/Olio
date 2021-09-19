import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </>
      <Route path='/contact' component={ContactPage} />
  );
};

export default Page;
