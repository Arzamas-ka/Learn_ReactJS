import React, { FC, SyntheticEvent } from 'react';

// types and styles
import { StyledHeaderWrapper, StyledHeaderTop } from './style';


// components
import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';

const Header: FC = () => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTop className="header-top">
        <Logo />
        <Button
          button
          type="button"
          onClick={handleOnClick}
          text="+ Add Movie"
        />
      </StyledHeaderTop>
      <Search />
    </StyledHeaderWrapper>
  );
};

export default Header;
