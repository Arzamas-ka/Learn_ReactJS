import React, { FC, SyntheticEvent, useCallback } from 'react';

import { HeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';

import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';
import MovieDetails from 'components/MovieDetails';

const Header: FC<HeaderProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
  hideAdd,
  setIsActiveBackdrop,
}) => {
  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  }, []);

  const showByCondition = errorMovieDetails || movieDetails;

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTop className="header-top">
        <Logo />
        {showByCondition && (
          <Button
            magnifier
            type="button"
            onClick={handleOnClick}
            text="&#x2315;"
          />
        )}
        {!showByCondition && (
          <Button
            button
            type="button"
            onClick={() => {
              hideAdd(), setIsActiveBackdrop(true);
            }}
            text="+ Add Movie"
          />
        )}
      </StyledHeaderTop>
      {showByCondition && (
        <MovieDetails
          movieDetails={movieDetails}
          loadingMovieDetails={loadingMovieDetails}
          errorMovieDetails={errorMovieDetails}
        />
      )}

      {!showByCondition && <Search />}
    </StyledHeaderWrapper>
  );
};

export default Header;
