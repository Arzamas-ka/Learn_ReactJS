import React, { FC } from 'react';
import shortid from 'shortid';

import { SelectProps } from './models';
import {
  StyledSelectWrapper,
  StyledSelectTitle,
  StyledSelectMain,
} from './style';

import { SELECT_OPTIONS } from '@constants';

const Select: FC<SelectProps> = ({ onChange, name }) => {
  const options = SELECT_OPTIONS.map((option) => (
    <option key={shortid.generate()}>{option}</option>
  ));

  return (
    <StyledSelectWrapper>
      <StyledSelectTitle>Genre</StyledSelectTitle>
      <StyledSelectMain name={name} onChange={onChange}>
        <option hidden>Select Genre</option>
        {options}
        <option>Science Fiction</option>
      </StyledSelectMain>
    </StyledSelectWrapper>
  );
};

export default Select;
