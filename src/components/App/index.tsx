import React, { FC, useState } from 'react';
// types and styles
import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// hooks
import useModal from 'hooks/useModal';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMoviePopup from 'components/AddMoviePopup';
import EditMoviePopup from 'components/EditMoviePopup';
import DeleteMoviePopup from 'components/DeleteMoviePopup';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);
  const [movieDetails, setMovieDetails]: any = useState(null);
  const { isShowing, toggle } = useModal();

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <DeleteMoviePopup />
      <EditMoviePopup />
      {isShowing && <AddMoviePopup hide={toggle} isShowing={isShowing} />}
      <Header movieDetails={movieDetails} hide={toggle} />
      <Catalog setMovieDetails={setMovieDetails} />
      <Footer />
    </StyledApp>
  );
};

export default App;
