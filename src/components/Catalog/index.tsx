import React, { FC } from 'react';

import {
  Catalog as CatalogWrapper,
  FilterSortWrapper,
  NumberMovies,
} from './style';

import Filter from './Filter';
import Sort from './Sort';
import Posters from './Posters';

const Catalog: FC = () => (
  <CatalogWrapper>
    <FilterSortWrapper>
      <Filter />
      <Sort />
    </FilterSortWrapper>
    <NumberMovies>
      <span>10</span> movie found
    </NumberMovies>
    <Posters />
  </CatalogWrapper>
);

export default Catalog;
