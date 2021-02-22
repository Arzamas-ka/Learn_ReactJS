import React, { SyntheticEvent } from 'react';

import { HeaderWrapper, HeaderBgr, Logo } from './style';

import Button from 'components/Button';

const Header: React.FC = () => {
  const handleOnClick = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  return (
    <>
      <HeaderBgr />
      <HeaderWrapper>
        <Logo>
          netflix<span>roulette</span>
        </Logo>
        <Button type="add" onClick={handleOnClick} text="+ Add Movie"></Button>
      </HeaderWrapper>
    </>
  );
};

export default Header;
