import React, { FC } from 'react';

import { App as AppStyled, Backdrop } from './style';
import { GlobalStyle } from '../../style';

import Header from 'components/Header';
import Catalog from 'components/Catalog';
import Footer from 'components/Footer';
import AddMovie from 'components/AddMovie';

const App: FC = () => (
  <AppStyled>
    <Backdrop className="backdrop"></Backdrop>
    <GlobalStyle />
    <AddMovie />
    <Header />
    <Catalog />
    <Footer />
  </AppStyled>
);

export default App;
