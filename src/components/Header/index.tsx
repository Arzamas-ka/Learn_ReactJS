import React, { FC, SyntheticEvent, useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';

import { HeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';

import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';
import MovieDetails from 'components/MovieDetails';

interface ParamTypes {
  id: string
}


const Header: FC<HeaderProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
  hideAdd,
  setIsActiveBackdrop,
}) => {
  const { id = null } = useParams<ParamTypes>();

  console.log('id: ', id);

  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();
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
        <Route path={`film/${id}`}>
          <MovieDetails
            movieDetails={movieDetails}
            loadingMovieDetails={loadingMovieDetails}
            errorMovieDetails={errorMovieDetails}
          />
        </Route>
      )}

      {!showByCondition && <Search />}
    </StyledHeaderWrapper>
  );
};

export default Header;
