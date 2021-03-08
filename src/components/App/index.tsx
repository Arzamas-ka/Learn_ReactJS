import React, { FC } from 'react';

import { GlobalStyle } from 'styles/style';
import { App as AppStyled, Backdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Header from 'components/Header';
import Catalog from 'components/Catalog';
import Footer from 'components/Footer';
import AddMovie from 'components/AddMovie';

const App: FC = () => (
  <AppStyled>
    <Backdrop className="backdrop" />
    <GlobalStyle />
    <AddMovie />
    <Header />
    <Catalog />
    <Footer />
  </AppStyled>
);

export default App;
