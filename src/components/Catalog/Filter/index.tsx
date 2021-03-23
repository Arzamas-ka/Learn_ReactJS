import React, { FC } from 'react';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA } from '@constants';

const Filter: FC = () => (
  <StyledFilterList>
    {FILTER_DATA.map((item) => (
      <StyledFilterItem key={item}>{item}</StyledFilterItem>
    ))}
  </StyledFilterList>
);

export default Filter;
