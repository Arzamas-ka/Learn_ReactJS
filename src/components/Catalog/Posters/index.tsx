import React, { FC } from 'react';
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
} from './style';

// hooks
import { usePostersFetch } from 'hooks/usePostersFetch';

const Posters: FC = () => {
  const { movies, error, loading, fetchMovies } = usePostersFetch();

  console.log('movies: ', movies.movies);

  const posters = movies.movies.map((poster) => (
    <StyledPostersItem key={shortid.generate()}>
      <StyledPostersLink>
        <StyledPostersImg src={poster.poster_path} alt={poster.title} />
        <StyledPostersWrapTitle>
          <StyledPostersTitle>{poster.title}</StyledPostersTitle>
          <StyledPostersTitleYear>{poster.release_date}</StyledPostersTitleYear>
        </StyledPostersWrapTitle>
        <StyledPostersGenre>
          {poster.genres.map((genre) => (
            <span key={shortid.generate()}> {genre}, </span>
          ))}
        </StyledPostersGenre>
      </StyledPostersLink>
    </StyledPostersItem>
  ));

  return (
    <StyledPostersWrapper>
      {error && <div>No Movie Found</div>}
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
