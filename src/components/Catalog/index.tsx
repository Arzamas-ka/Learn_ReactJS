import React, { FC } from 'react';

import { CatalogProps } from './models';
import { StyledCatalogWrapper, StyledFilterSelectionWrapper } from './style';

import Filter from './Filter';
import Selection from './Selection';
import Posters from './Posters';

const Catalog: FC<CatalogProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
}) => (
  <StyledCatalogWrapper>
    <StyledFilterSelectionWrapper>
      <Filter />
      <Selection />
    </StyledFilterSelectionWrapper>
    <Posters
      setMovieDetails={setMovieDetails}
      setLoadingMovieDetails={setLoadingMovieDetails}
      setErrorMovieDetails={setErrorMovieDetails}
    />
  </StyledCatalogWrapper>
);

export default Catalog;
