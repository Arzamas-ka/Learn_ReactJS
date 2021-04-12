import React, { FC, SyntheticEvent, useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';

import { SearchHeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';

import Button from 'components/Button';
import Logo from 'components/Logo';
import MovieDetails from 'components/MovieDetails';

const SearchHeader: FC<SearchHeaderProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();
  }, []);

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTop className="header-top">
        <Logo />

        <Button
          magnifier
          type="button"
          onClick={handleOnClick}
          text="&#x2315;"
        />
      </StyledHeaderTop>
      <MovieDetails
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
      />
    </StyledHeaderWrapper>
  );
};

export default SearchHeader;
