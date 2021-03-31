import React, { FC } from 'react';

import {
  StyledSelectionSelect,
  StyledSelectionOption,
  StyledSelectionTitle,
  StyledSelectionContainer,
} from './style';

import { SELECTION_DATA } from '@constants';

const Selection: FC = () => (
  <StyledSelectionContainer>
    <StyledSelectionTitle>Sort by</StyledSelectionTitle>
    <StyledSelectionSelect>
      {SELECTION_DATA.map((item) => (
        <StyledSelectionOption key={item}>{item}</StyledSelectionOption>
      ))}
    </StyledSelectionSelect>
  </StyledSelectionContainer>
);

export default Selection;
