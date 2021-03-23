import React, { FC } from 'react';

import { ErrorIndicatorProps } from './models';
import {
  StyledErrorWrapper,
  StyledErrorImage,
  StyledErrorMessage,
} from './style';

import imageError from '../../assets/images/error-boundary.png';

import Button from 'components/Button';

const ErrorIndicator: FC<ErrorIndicatorProps> = ({ handleCloseError }) => {
  const handleOnClick = () => {
    console.log(`
      = = = = = = = = = = = = = 
      CLICK BUTTON: GO HOME !!
      = = = = = = = = = = = = =
    `);
  };

  return (
    <StyledErrorWrapper>
      <StyledErrorMessage>Page Not Found</StyledErrorMessage>
      <StyledErrorImage src={imageError} alt="Error Indicator" />
      <Button
        reset
        type="button"
        onClick={handleOnClick}
        text="Go back to home"
      />
    </StyledErrorWrapper>
  );
};

export default ErrorIndicator;