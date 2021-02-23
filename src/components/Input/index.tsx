import React, { FC } from 'react';

import { InputProps } from './models';
import { InputWrapper, Input as InputStyled } from './style';

import Button from 'components/Button';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  view,
  label,
}) => (
  <InputWrapper>
    <InputStyled>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        className={`input-${view}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </InputStyled>
    <Button type="submit" view="submit" onClick={null} text="Search"></Button>
  </InputWrapper>
);

export default Input;
