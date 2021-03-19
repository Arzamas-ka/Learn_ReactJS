import React, { FC } from 'react';

import { SelectionList, SelectionItem } from './style';

import { sortData } from 'data/data';

const Selection: FC = () => (
  <SelectionList>
    {sortData.map((item) => (
      <SelectionItem key={item}>{item}</SelectionItem>
    ))}
  </SelectionList>
);

export default Selection;
