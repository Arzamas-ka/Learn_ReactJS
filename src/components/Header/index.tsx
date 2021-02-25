import React, { FC, SyntheticEvent } from 'react';

import { HeaderWrapper, Logo } from './style';

import Button from 'components/Button';
import Search from 'components/Search';

const Header: FC = () => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  };

  return (
    <>
      <HeaderWrapper>
        <div className="header-top">
          <Logo href="#">
            <h2>
              netflix<span>roulette</span>
            </h2>
          </Logo>
          <Button
            type="button"
            view="button"
            onClick={handleOnClick}
            text="+ Add Movie"
          ></Button>
        </div>
        <Search />
      </HeaderWrapper>
    </>
  );
};

export default Header;
