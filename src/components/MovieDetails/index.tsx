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
  StyledMovieDetailsError,
} from './style';

import defaultImgMovie from '../../assets/images/fallback_movie.png';

import { Spinner } from 'components/Spinner';

const MovieDetails: FC<MovieDetailsProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'Image not found';
  }, []);

  console.log('loadingMovieDetails: ', loadingMovieDetails);
  console.log('errorMovieDetails: ', errorMovieDetails);

  return (
    <StyledMovieDetailsWrapper>
      {errorMovieDetails && (
        <StyledMovieDetailsError>
          No Movie Details Found
        </StyledMovieDetailsError>
      )}
      {loadingMovieDetails && <Spinner />}
      {!errorMovieDetails && !loadingMovieDetails && (
        <>
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
            <StyledMovieDetailsWin>
              {movieDetails.tagline}
            </StyledMovieDetailsWin>
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
        </>
      )}
    </StyledMovieDetailsWrapper>
  );
};

export default MovieDetails;
