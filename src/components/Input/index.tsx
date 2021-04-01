import React, { FC } from 'react';

import { InputProps } from './models';
import { StyledInputWrapper, StyledInput, StyledLabel } from './style';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  label,
  name,
  autoComplete,
  disabled,
  ...props
}) => (
  <StyledInputWrapper placeholder={placeholder} {...props}>
    {label && <StyledLabel htmlFor="input-field">{label}</StyledLabel>}
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  </StyledInputWrapper>
);

export default Input;
