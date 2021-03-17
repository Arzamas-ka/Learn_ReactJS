import React, { FC, useState } from 'react';

// types and styles
import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMoviePopup from 'components/AddMoviePopup';
import EditMoviePopup from 'components/EditMoviePopup';
import DeleteMoviePopup from 'components/DeleteMoviePopup';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <DeleteMoviePopup />
      <EditMoviePopup />
      <AddMoviePopup />
      <Header />
      <Catalog />
      <Footer />
    </StyledApp>
  );
};

export default App;
