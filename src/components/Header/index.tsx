import React, { FC, SyntheticEvent } from 'react';
// types and styles
import { HeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';
// components
import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';
import MovieDetails from 'components/MovieDetails';

const Header: FC<HeaderProps> = ({ movieDetails }) => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  console.log('movieDetailsHeader: ', movieDetails);

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTop className="header-top">
        <Logo />
        {!movieDetails && (
          <Button
            button
            type="button"
            onClick={handleOnClick}
            text="+ Add Movie"
          />
        )}
      </StyledHeaderTop>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      {!movieDetails && <Search />}
    </StyledHeaderWrapper>
  );
};

export default Header;
