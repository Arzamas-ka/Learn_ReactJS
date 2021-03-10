import React, { FC, useState } from 'react';

import { GlobalStyle } from '../../styles/style';
import { App as AppStyled, Backdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Header from 'components/Header';
import Catalog from 'components/Catalog';
import Footer from 'components/Footer';
import EditMovie from 'components/EditMovie';
import AddMovie from 'components/AddMovie';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(true);

  return (
    <AppStyled>
      <Backdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <EditMovie />
      <AddMovie />
      <Header />
      <Catalog />
      <Footer />
    </AppStyled>
  );
};

export default App;
