import React, { FC, useState } from 'react';

import { GlobalStyle } from '../../styles/style';
import { App as AppStyled, Backdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMovie from 'components/AddMovie';
import EditMovie from 'components/EditMovie';
import DeleteMovie from 'components/DeleteMovie';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);

  return (
    <AppStyled>
      <Backdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <DeleteMovie />
      <EditMovie />
      <AddMovie />
      <Header />
      <Catalog />
      <Footer />
    </AppStyled>
  );
};

export default App;
