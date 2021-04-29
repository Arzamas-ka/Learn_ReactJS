import * as React from 'react';
import { FC, useContext } from 'react';

import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Router from './Router';
import Modals from './Modals';
import Footer from 'components/Footer';
import { ModalsContext } from './ModalsContext';

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
