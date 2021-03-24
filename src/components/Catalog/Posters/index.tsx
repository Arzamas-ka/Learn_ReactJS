import React, { FC, useCallback, useEffect, memo } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';

import { PostersProps } from './models';
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledNumberMovies,
  StyledPostersError,
} from './style';

import Button from 'components/Button';
import { Spinner } from 'components/Spinner';
import PosterItem from './PosterItem';

import { moviesAction, loadMoreMoviesAction } from 'actions/actions';
import { getMovies, getMoreMovies } from 'api';

const Posters: FC<PostersProps> = ({ setMovieDetails }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);

  useEffect(() => {
    moviesAction(getMovies()(dispatch));
  }, []);

  const loadMoreMovies = () => {
    loadMoreMoviesAction(getMoreMovies(currentPage)(dispatch));
  };

  const posters = movies.items.map((poster) => {
    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <PosterItem
        key={shortid.generate()}
        setMovieDetails={setMovieDetails}
        poster={poster}
        genre={genre}
      />
    );
  });

  return (
    <StyledPostersWrapper>
      {error && <StyledPostersError>No Movie Found</StyledPostersError>}
      {loading && <Spinner />}
      {!error && !loading && (
        <>
          {' '}
          <StyledNumberMovies>
            <span>{movies.items.length}</span> movie found
          </StyledNumberMovies>
          <StyledPostersList>{posters}</StyledPostersList>
          <Button
            load
            text="Load more posters"
            type="button"
            onClick={loadMoreMovies}
          />
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
