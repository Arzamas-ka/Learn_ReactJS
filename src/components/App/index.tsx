import React, { FC, useState } from 'react';

import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import usePopup from 'hooks/usePopup';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMoviePopup from 'components/AddMoviePopup';
import EditMoviePopup from 'components/EditMoviePopup';
import DeleteMoviePopup from 'components/DeleteMoviePopup';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);
  const [movieDetails, setMovieDetails]: any = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails]: any = useState(true);
  const [errorMovieDetails, setErrorMovieDetails]: any = useState(false);
  const { isShowing, toggle } = usePopup();

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      <DeleteMoviePopup />
      <EditMoviePopup />
      {isShowing && <AddMoviePopup hide={toggle} isShowing={isShowing} />}
      <Header
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
        hide={toggle}
      />
      <Catalog
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
      />
      <Footer />
    </StyledApp>
  );
};

export default App;
