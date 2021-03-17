import React, { FC, useState } from 'react';

// types and styles
import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMovie from 'components/AddMovie';
import EditMovie from 'components/EditMovie';
import DeleteMovie from 'components/DeleteMovie';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <DeleteMovie />
      <EditMovie />
      <AddMovie />
      <Header />
      <Catalog />
      <Footer />
    </StyledApp>
  );
};

export default App;
