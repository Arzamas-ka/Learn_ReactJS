import React, { FC, SyntheticEvent } from 'react';

import { HeaderWrapper } from './style';

import Button from 'components/Button';
import Search from 'components/Search';
import Logo from 'components/Logo';

const Header: FC = () => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />
        <Button
          type="button"
          view="button"
          onClick={handleOnClick}
          text="+ Add Movie"
        />
      </div>
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
