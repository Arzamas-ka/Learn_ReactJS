import React, { FC } from 'react';
// types and styles
import { StyledList, StyledItem } from './style';
// constants
import { SORT_DATA } from '@constants';

const Sort: FC = () => (
  <StyledList>
    {SORT_DATA.map((item) => (
      <StyledItem key={item} className="active-link">
        {item}
      </StyledItem>
    ))}
  </StyledList>
);

export default Sort;
