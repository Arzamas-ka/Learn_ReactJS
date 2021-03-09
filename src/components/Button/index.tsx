import React, { FC } from 'react';

import { ButtonProps } from './models';
import { Button as ButtonStyled } from './style';

const Button: FC<ButtonProps> = ({ text, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} {...props}>
    {text}
  </ButtonStyled>
);

export default Button;
