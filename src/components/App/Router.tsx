import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NoMatch from 'components/NoMatch';
import SearchMovies from 'pages/SearchMovies';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/film/:id">
        <MovieDetails />
      </Route>
      <Route path="/search/:slug">
        <SearchMovies />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default AppRouter;
