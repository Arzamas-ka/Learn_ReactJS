import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NoMatch from 'components/NoMatch';


const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/film/:id">
        <MovieDetails />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default AppRouter;
