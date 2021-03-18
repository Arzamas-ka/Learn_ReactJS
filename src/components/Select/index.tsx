import React, { FC, useState } from 'react';
// types and styles
import { SelectProps } from './models';
import {
  StyledSelectWrapper,
  StyledSelectTitle,
  StyledSelectMain,
} from './style';

const Select: FC<SelectProps> = ({ onChange, name }) => {
  return (
    <StyledSelectWrapper>
      <StyledSelectTitle>Genre</StyledSelectTitle>
      <StyledSelectMain name={name} onChange={onChange}>
        <option hidden>Select Genre</option>
        <option>Crime</option>
        <option>Documentary</option>
        <option>Horror</option>
        <option>Comedy</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Drama</option>
        <option>Fantasy</option>
        <option>Romance</option>
        <option>Science Fiction</option>
      </StyledSelectMain>
    </StyledSelectWrapper>
  );
};

export default Select;
