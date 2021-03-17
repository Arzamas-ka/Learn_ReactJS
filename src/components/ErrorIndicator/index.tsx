import React, { FC } from 'react';

// types and styled
import { ErrorIndicator } from './models';
import {
  StyledErrorWrapper,
  StyledErrorImage,
  StyledErrorMessage,
} from './style';

// images
import imageError from '../../assets/images/error-boundary.png';

// components
import Button from 'components/Button';

const ErrorIndicator: FC<ErrorIndicator> = ({
  handleCloseError,
}: ErrorIndicator) => {
  const handleOnClick = () => {
    console.log(`
      = = = = = = = = = = = = = 
      CLICK BUTTON: GO HOME !!
      = = = = = = = = = = = = =
    `);
  };

  return (
    <StyledErrorWrapper>
      <StyledErrorMessage>No Movie Found</StyledErrorMessage>
      <StyledErrorImage src={imageError} alt="Error Indicator" />
      <Button reset type="button" onClick={handleOnClick} text="Go back to home" />
    </StyledErrorWrapper>
  );
};

export default ErrorIndicator;
