import React, { FC } from 'react';

import { InputProps } from './models';
import { Input as InputStyled } from './style';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  view,
  label,
  onClick,
}) => (
  <InputStyled>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      className={`input-${view}`}
      type={type}
      name={view}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onClick={onClick}
    />
  </InputStyled>
);

export default Input;
