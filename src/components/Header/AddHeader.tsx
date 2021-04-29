import * as React from 'react';
import { FC, SyntheticEvent, useCallback } from 'react';

import { AddHeaderProps } from './models';
import { StyledHeaderWrapper, StyledHeaderTop } from './style';

import Button from 'components/Button';
import Logo from 'components/Logo';
import Search from 'components/Search';

const AddHeader: FC<AddHeaderProps> = ({ hideAdd, setIsActiveBackdrop }) => {
  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    hideAdd();
    setIsActiveBackdrop(true);
  }, []);

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

export default AddHeader;
