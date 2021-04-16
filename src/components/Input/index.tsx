import * as React from 'react';
import { FC, forwardRef } from 'react';

import { InputProps } from './models';
import { StyledInputWrapper, StyledInput, StyledLabel } from './style';

const Input: FC<InputProps> = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      value,
      label,
      name,
      autoComplete,
      disabled,
      ...props
    },
    ref,
  ) => (
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
        ref={ref}
      />
    </StyledInputWrapper>
  ),
);

export default Input;
