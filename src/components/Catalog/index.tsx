import React, { FC } from 'react';

// types and styles
import {
  StyledCatalogWrapper,
  StyledFilterSelectionWrapper,
  StyledNumberMovies,
} from './style';

// components
import Filter from './Filter';
import Selection from './Selection';
import Posters from './Posters';

const Catalog: FC = () => (
  <StyledCatalogWrapper>
    <StyledFilterSelectionWrapper>
      <Filter />
      <Selection />
    </StyledFilterSelectionWrapper>
    <StyledNumberMovies>
      <span>10</span> movie found
    </StyledNumberMovies>
    <Posters />
  </StyledCatalogWrapper>
);

export default Catalog;
