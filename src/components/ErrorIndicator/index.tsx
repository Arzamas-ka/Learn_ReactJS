import * as React from 'react';
import { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { ErrorIndicatorProps } from './models';
import { StyledErrorWrapper, StyledErrorImage } from './style';

import imageError from '../../assets/images/error-boundary.png';

import Button from 'components/Button';

const ErrorIndicator: FC<ErrorIndicatorProps> = ({ handleCloseError }) => {
  const handleOnClick = () => {
    <Redirect to="/" />;
    handleCloseError();
  };

  return (
    <StyledErrorWrapper>
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
