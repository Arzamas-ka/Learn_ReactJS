import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import PosterItem from 'components/Catalog/Posters/PosterItem';
import ModalsContextProvider from 'components/App/ModalsContext';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { movies } from 'reducers/movies';

const poster = {
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the life",
  vote_average: 6,
  vote_count: 1195,
  release_date: '2016-02-11',
  poster_path:
    'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
  overview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  budget: 55000000,
  revenue: 1023784195,
  runtime: 110,
  genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
  id: 337167,
};

const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(movies, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('<PosterItem />', () => {
  it('matches with snapshot', () => {
    const { baseElement } = renderWithRedux(
      <ModalsContextProvider>
        <Router>
          <PosterItem
            genre={poster.genres}
            poster={poster}
            hideEdit={() => {}}
            hideDelete={() => {}}
            setIsActiveBackdrop={() => {}}
            setLoadingMovieDetails={false}
            setErrorMovieDetails={false}
            setMovieDetails={poster}
          />
        </Router>
      </ModalsContextProvider>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('shows poster title', () => {
    const posterItemComponent = renderWithRedux(
      <ModalsContextProvider>
        <Router>
          <PosterItem
            genre={poster.genres}
            poster={poster}
            hideEdit={() => {}}
            hideDelete={() => {}}
            setIsActiveBackdrop={() => {}}
            setLoadingMovieDetails={false}
            setErrorMovieDetails={false}
            setMovieDetails={poster}
          />
        </Router>
      </ModalsContextProvider>,
    );
    const posterTitle = posterItemComponent.getByText(/fifty shades freed/i);

    expect(posterTitle).toBeInTheDocument();
  });

  it('do not show poster title', () => {
    const posterItemComponent = renderWithRedux(
      <ModalsContextProvider>
        <Router>
          <PosterItem
            genre={poster.genres}
            poster={{ ...poster, title: '' }}
            hideEdit={() => {}}
            hideDelete={() => {}}
            setIsActiveBackdrop={() => {}}
            setLoadingMovieDetails={false}
            setErrorMovieDetails={false}
            setMovieDetails={poster}
          />
        </Router>
      </ModalsContextProvider>,
    );
    const posterTitle = posterItemComponent.queryByText(/fifty shades freed/i);

    expect(posterTitle).not.toBeInTheDocument();
  });
});