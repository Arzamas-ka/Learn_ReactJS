import React, { FC } from 'react';

import { ErrorIndicator } from './models';
import { Error } from './style';

import imageError from '../../assets/images/error-boundary.png';

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
    <Error>
      <img src={imageError} alt="Error Indicator" />
      <p>Something went wrong !</p>
      <p>We are working on it!</p>
      <Button
        type="button"
        onClick={handleOnClick}
        text="Go Home"
      />
    </Error>
  );
};

export default ErrorIndicator;
