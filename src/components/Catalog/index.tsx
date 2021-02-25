import React, { FC } from 'react';

import { Catalog as CatalogWrapper } from './style';

import Filter from './Filter';
import Sort from './Sort';
import Posters from './Sort';

const Catalog: FC = () => (
  <CatalogWrapper>
    <div>
      <Filter />
      <Sort />
      <Posters />
    </div>
  </CatalogWrapper>
);

export default Catalog;
