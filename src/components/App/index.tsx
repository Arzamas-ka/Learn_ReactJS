import React, { FC } from 'react';

import { App as AppStyled } from './style';
import { GlobalStyle } from '../../style';

import Header from 'components/Header';
import Catalog from 'components/Catalog';

const App: FC = () => (
  <AppStyled>
    <GlobalStyle />
    <Header />
    <Catalog />
  </AppStyled>
);

export default App;
