import React, { FC } from 'react';

import { FilterList, FilterItem } from './style';

import { filterData } from 'data/data';

const Filter: FC = () => (
  <>
    <FilterList>
      {filterData.map((item) => (
        <FilterItem key={item} className="active-link">
          {item}
        </FilterItem>
      ))}
    </FilterList>
  </>
);

export default Filter;
