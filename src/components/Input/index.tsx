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
  name
}) => (
    <InputStyled>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        className={`input-${view}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </InputStyled>
);

export default Input;
