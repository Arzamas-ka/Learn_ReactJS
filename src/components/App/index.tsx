import React, { FC } from 'react';

import { App as AppStyled } from './style';
import { GlobalStyle } from '../../style';

import Header from 'components/Header';
import Catalog from 'components/Catalog';
import Footer from 'components/Footer';

const App: FC = () => (
  <AppStyled>
    <GlobalStyle />
    <Header />
    <Catalog />
    <Footer />
  </AppStyled>
);

export default App;
