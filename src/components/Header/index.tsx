import React, { FC, SyntheticEvent } from 'react';

import { HeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';

import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';
import MovieDetails from 'components/MovieDetails';

const Header: FC<HeaderProps> = ({ movieDetails, hide }) => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTop className="header-top">
        <Logo />
        {movieDetails && (
          <Button
            magnifier
            type="button"
            onClick={handleOnClick}
            text="&#x2315;"
          />
        )}
        {!movieDetails && (
          <Button button type="button" onClick={hide} text="+ Add Movie" />
        )}
      </StyledHeaderTop>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      {!movieDetails && <Search />}
    </StyledHeaderWrapper>
  );
};

export default Header;
