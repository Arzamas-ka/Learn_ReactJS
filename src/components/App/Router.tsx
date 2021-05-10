import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import { Spinner } from 'components/Spinner';

const MovieDetails = lazy(() => import('pages/MovieDetails'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));
const NoMatch = lazy(() => import('components/NoMatch'));

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
          <Suspense fallback={<Spinner />}>
            <route.component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  );
};

export default AppRouter;
