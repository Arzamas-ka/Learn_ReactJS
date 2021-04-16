import * as React from 'react';
import { FC, SyntheticEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();

    history.push('/');
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
