import React, { FC } from 'react';

import { Sort as SortWrapper } from './style';

import { sortData } from 'data/data';

const Sort: FC = () => (
  <SortWrapper>
    <ul>
      {sortData.map((item) => (
        <li key={item} className="active-link">
          {item}
        </li>
      ))}
    </ul>
  </SortWrapper>
);

export default Sort;
