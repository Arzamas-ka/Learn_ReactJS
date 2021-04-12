import React, { FC, useContext, useState } from 'react';

import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Router from './Router';
import Modals from './Modals';

import { ModalsContext } from './ModalsContext';
import Footer from 'components/Footer';

const App: FC = () => {
  const { isActiveBackdrop } = useContext(ModalsContext);

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <Modals />
      <Router />
      <Footer />
    </StyledApp>
  );
};

export default App;
