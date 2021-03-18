import React, { FC } from 'react';
// types and styles
import { CatalogProps } from './models';
import { StyledCatalogWrapper, StyledFilterSelectionWrapper } from './style';
// components
import Filter from './Filter';
import Selection from './Selection';
import Posters from './Posters';

const Catalog: FC<CatalogProps> = ({ setMovieDetails }) => (
  <StyledCatalogWrapper>
    <StyledFilterSelectionWrapper>
      <Filter />
      <Selection />
    </StyledFilterSelectionWrapper>
    <Posters setMovieDetails={setMovieDetails} />
  </StyledCatalogWrapper>
);

export default Catalog;
