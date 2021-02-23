import React, { FC } from 'react';

import { ButtonProps } from './models';
import { Button as ButtonStyled } from './style';

const Button: FC<ButtonProps> = ({ text, onClick, view }) => (
  <ButtonStyled className={`btn-${view}`} onClick={onClick}>
    {text}
  </ButtonStyled>
);

export default Button;
