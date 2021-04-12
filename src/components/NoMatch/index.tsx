import React, { FC } from 'react';

import {
  StyledNoMatchWrapper,
  StyledNoMatchImage,
  StyledNoMatchMessage,
} from './style';

import fourZeroFourImg from '../../assets/images/four_zero_four.png';

import Button from 'components/Button';
import Logo from 'components/Logo';

const NoMatch: FC = () => {
  const handleOnClick = () => {
    console.log('click NoMatch');
  };

  return (
    <StyledNoMatchWrapper>
      <Logo />
      <StyledNoMatchMessage>Page Not Found</StyledNoMatchMessage>
      <StyledNoMatchImage src={fourZeroFourImg} alt="NoMatch" />
      <Button
        reset
        type="button"
        onClick={handleOnClick}
        text="Go back to home"
      />
    </StyledNoMatchWrapper>
  );
};

export default NoMatch;
