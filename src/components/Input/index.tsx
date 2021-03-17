import React, { FC } from 'react';

// types and styles
import { InputProps } from './models';
import { StyledInputWrapper, StyledInput, StyledLabel } from './style';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  label,
  name,
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
    />
  </StyledInputWrapper>
);

export default Input;
