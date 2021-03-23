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

import { moviesAction } from 'actions/actions';
import { getMovies } from 'api';

const Posters: FC<PostersProps> = ({ setMovieDetails }: any) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);

  console.log('posterLoader: ', loading);
  console.log('posterError: ', error);

  useEffect(() => {
    console.log('useEffect');
    moviesAction(getMovies()(dispatch));
  }, []);

  // const loadMorePosters = useCallback(() => {
  //   const loadMorePostersEndpoint = `${API_PAGE}${movies.currentPage + 1}`;

  //   fetchMovies(loadMorePostersEndpoint);
  // }, []);

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
            // onClick={loadMorePosters}
            onClick={null}
          />
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
