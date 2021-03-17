import React, { FC } from 'react';

// types and styles
import { StyledFilterList, StyledFilterItem } from './style';

// constants
import { FILTER_DATA } from '@constants';

const Filter: FC = () => (
  <StyledFilterList>
    {FILTER_DATA.map((item) => (
      <StyledFilterItem key={item} className="active-link">
        {item}
      </StyledFilterItem>
    ))}
  </StyledFilterList>
);

export default Filter;
