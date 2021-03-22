import React, { FC, useCallback } from 'react';

import { MovieDetailsProps } from './models';
import {
  StyledMovieDetailsWrapper,
  StyledMovieDetailsImage,
  StyledMovieDetailsDescription,
  StyledMovieDetailsTitle,
  StyledMovieDetailsWin,
  StyledMovieDetailsDate,
  StyledMovieDetailsYear,
  StyledMovieDetailsTime,
  StyledMovieDetailsArticle,
  StyledMovieDetailsAverage,
  StyledMovieDetailsTitleContainer,
} from './style';

import defaultImgMovie from '../../assets/images/fallback_movie.png';

const MovieDetails: FC<MovieDetailsProps> = ({ movieDetails }) => {
  console.log('componentMovieDetails: ', movieDetails);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'Image not found';
  }, []);

  return (
    <StyledMovieDetailsWrapper>
      <StyledMovieDetailsImage
        src={movieDetails.poster_path}
        alt={movieDetails.title}
        onError={addDefaultSrc}
      />
      <StyledMovieDetailsDescription>
        <StyledMovieDetailsTitleContainer>
          <StyledMovieDetailsTitle>
            {movieDetails.title}
          </StyledMovieDetailsTitle>
          <StyledMovieDetailsAverage>
            {movieDetails.vote_average}
          </StyledMovieDetailsAverage>
        </StyledMovieDetailsTitleContainer>
        <StyledMovieDetailsWin>{movieDetails.tagline}</StyledMovieDetailsWin>
        <StyledMovieDetailsDate>
          <StyledMovieDetailsYear>
            {movieDetails.release_date}
          </StyledMovieDetailsYear>
          <StyledMovieDetailsTime>{`${movieDetails.runtime} min`}</StyledMovieDetailsTime>
        </StyledMovieDetailsDate>
        <StyledMovieDetailsArticle>
          {movieDetails.overview}
        </StyledMovieDetailsArticle>
      </StyledMovieDetailsDescription>
    </StyledMovieDetailsWrapper>
  );
};

export default MovieDetails;
