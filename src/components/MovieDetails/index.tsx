import React, { FC } from 'react';
// types and styles
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
} from './style';

const MovieDetails: FC<MovieDetailsProps> = ({ movieDetails }) => {
  console.log('componentMovieDetails: ', movieDetails);

  return (
    <StyledMovieDetailsWrapper>
      <StyledMovieDetailsImage src={movieDetails.poster_path} />
      <StyledMovieDetailsDescription>
        <StyledMovieDetailsTitle>{movieDetails.title}</StyledMovieDetailsTitle>
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
