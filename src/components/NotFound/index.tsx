import React, { FC } from 'react';

import {
  StyledNotFoundWrapper,
  StyledNotFoundImage,
  StyledNotFoundMessage,
} from './style';

import fourZeroFourImg from '../../assets/images/four_zero_four.png';

import Button from 'components/Button';

const NotFound: FC = () => {
  const handleOnClick = () => {
    console.log('click NotFound');
  };

  return (
    <StyledNotFoundWrapper>
      <StyledNotFoundMessage>Page Not Found</StyledNotFoundMessage>
      <StyledNotFoundImage src={fourZeroFourImg} alt="NotFound" />
      <Button
        reset
        type="button"
        onClick={handleOnClick}
        text="Go back to home"
      />
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
