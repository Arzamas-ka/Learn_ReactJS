import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NoMatch from 'components/NoMatch';
import SearchMovies from 'pages/SearchMovies';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/film/:id',
    component: MovieDetails,
  },
  {
    path: '/search/:slug',
    component: SearchMovies,
  },
  {
    path: '*',
    component: NoMatch,
  },
];

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <route.component />
        </Route>
      ))}
    </Switch>
  );
};

export default AppRouter;
