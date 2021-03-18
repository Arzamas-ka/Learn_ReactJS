import React, { FC } from 'react';
// types and styles
import { StyledCatalogWrapper, StyledFilterSelectionWrapper } from './style';
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
    <Posters />
  </StyledCatalogWrapper>
);

export default Catalog;
