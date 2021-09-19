import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </>
  );
};

export default Page;