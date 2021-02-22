import React from 'react';

import { ButtonProps } from './models';

import { Button as ButtonStyled } from './style';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);

export default Button;
