import React, { FC, useCallback, memo } from 'react';
import shortid from 'shortid';

import { PostersProps } from './models';
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledNumberMovies,
  StyledPostersError,
} from './style';

import usePostersFetch from 'hooks/usePostersFetch';

import { API_PAGE } from '@constants';

import Button from 'components/Button';
import { Spinner } from 'components/Spinner';
import PosterItem from './PosterItem';

const Posters: FC<PostersProps> = ({ setMovieDetails }: any) => {
  const { movies, error, loading, fetchMovies }: any = usePostersFetch();

  const loadMorePosters = useCallback(() => {
    const loadMorePostersEndpoint = `${API_PAGE}${movies.currentPage + 1}`;

    fetchMovies(loadMorePostersEndpoint);
  }, []);

  const posters = movies.movies.map((poster) => {
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
      <>
        {' '}
        <StyledNumberMovies>
          <span>{movies.movies.length}</span> movie found
        </StyledNumberMovies>
        <StyledPostersList>{posters}</StyledPostersList>
      </>
      <Button
        load
        text="Load more posters"
        type="button"
        onClick={loadMorePosters}
      />
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
