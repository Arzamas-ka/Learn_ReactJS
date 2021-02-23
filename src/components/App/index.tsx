import React, { FC } from 'react';

import { App as AppStyled } from './style';
import { GlobalStyle } from '../../style';

import Header from 'components/Header';

const App: FC = () => (
  <AppStyled>
    <GlobalStyle />
    <Header />
  </AppStyled>
);

export default App;
