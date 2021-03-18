import React, { FC, useCallback } from 'react';
import shortid from 'shortid';

// types and styles
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledPostersItem,
  StyledPostersWrapTitle,
  StyledPostersTitle,
  StyledPostersTitleYear,
  StyledPostersImg,
  StyledPostersGenre,
  StyledPostersLink,
  StyledNumberMovies,
  StyledPostersError,
} from './style';

// hooks
import { usePostersFetch } from 'hooks/usePostersFetch';

// images
import defaultImgMovie from '../../../assets/images/fallback_movie.png';

const Posters: FC = () => {
  const { movies, error, loading, fetchMovies } = usePostersFetch();

  console.log('movies: ', movies.movies);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  const posters = movies.movies.map((poster) => {
    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <StyledPostersItem key={shortid.generate()}>
        <StyledPostersLink>
          <StyledPostersImg
            src={poster.poster_path}
            alt={poster.title}
            onError={addDefaultSrc}
          />
          <StyledPostersWrapTitle>
            <StyledPostersTitle>{poster.title}</StyledPostersTitle>
            <StyledPostersTitleYear>
              {poster.release_date}
            </StyledPostersTitleYear>
          </StyledPostersWrapTitle>
          <StyledPostersGenre>{genre}</StyledPostersGenre>
        </StyledPostersLink>
      </StyledPostersItem>
    );
  });

  return (
    <StyledPostersWrapper>
      {error && <StyledPostersError>No Movie Found</StyledPostersError>}
      {!loading && (
        <>
          {' '}
          <StyledNumberMovies>
            <span>{movies.movies.length}</span> movie found
          </StyledNumberMovies>
          <StyledPostersList>{posters}</StyledPostersList>
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default Posters;
