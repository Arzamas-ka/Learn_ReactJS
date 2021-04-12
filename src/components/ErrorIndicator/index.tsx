import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { ErrorIndicatorProps } from './models';
import {
  StyledErrorWrapper,
  StyledErrorImage,
} from './style';

import imageError from '../../assets/images/error-boundary.png';

import Button from 'components/Button';
import Logo from 'components/Logo';

const ErrorIndicator: FC<ErrorIndicatorProps> = ({ handleCloseError }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/');
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
