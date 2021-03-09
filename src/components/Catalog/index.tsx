import React, { FC } from 'react';

import {
  Catalog as CatalogWrapper,
  FilterSelectionWrapper,
  NumberMovies,
} from './style';

import Filter from './Filter';
import Selection from './Selection';
import Posters from './Posters';

const Catalog: FC = () => (
  <CatalogWrapper>
    <FilterSelectionWrapper>
      <Filter />
      <Selection />
    </FilterSelectionWrapper>
    <NumberMovies>
      <span>10</span> movie found
    </NumberMovies>
    <Posters />
  </CatalogWrapper>
);

export default Catalog;
