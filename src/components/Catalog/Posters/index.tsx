import React, { FC, useEffect, memo, useCallback } from 'react';
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

import { getMovies, getMoreMovies } from 'api';

const Posters: FC<PostersProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    dispatch(getMoreMovies(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === undefined) {
      return;
    } else {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [currentPage]);

  const posters = movies.items.map((poster) => {
    if (!poster.genres) poster.genres = [];

    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <PosterItem
        key={shortid.generate()}
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        poster={poster}
        genre={genre}
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
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
            onClick={handleLoadMoreMovies}
          />
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
