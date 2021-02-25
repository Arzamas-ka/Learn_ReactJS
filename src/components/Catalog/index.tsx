import React, { FC } from 'react';

import { Catalog as CatalogWrapper, FilterSortWrapper } from './style';

import Filter from './Filter';
import Sort from './Sort';
import Posters from './Posters';

const Catalog: FC = () => (
  <CatalogWrapper>
    <FilterSortWrapper>
      <Filter />
      <Sort />
    </FilterSortWrapper>
      <Posters />
  </CatalogWrapper>
);

export default Catalog;
