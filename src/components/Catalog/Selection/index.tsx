import React, { FC } from 'react';

import { StyledSelectionList, StyledSelectionItem } from './style';

import { SELECTION_DATA } from '@constants';

const Selection: FC = () => (
  <StyledSelectionList>
    {SELECTION_DATA.map((item) => (
      <StyledSelectionItem key={item}>
        {item}
      </StyledSelectionItem>
    ))}
  </StyledSelectionList>
);

export default Selection;
