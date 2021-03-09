import React, { FC } from 'react';

import { InputProps } from './models';
import { Input as InputStyled } from './style';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  label,
  name,
  ...props
}) => (
  <InputStyled placeholder={placeholder} {...props}>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  </InputStyled>
);

export default Input;
