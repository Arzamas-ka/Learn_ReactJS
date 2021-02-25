import React, { FC } from 'react';

import { Filter as FilterWrapper } from './style';

import { filterData } from 'data/data';

const Filter: FC = () => (
  <FilterWrapper>
    <ul>
      {filterData.map((item) => (
        <li key={item} className="active-link">
          {item}
        </li>
      ))}
    </ul>
  </FilterWrapper>
);

export default Filter;
