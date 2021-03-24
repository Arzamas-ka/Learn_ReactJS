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
  const { isShowing: isShowingAdd, toggle: toggleAdd } = usePopup();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = usePopup();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = usePopup();

  return (
    <StyledApp>
      <StyledBackdrop active={isActiveBackdrop} />
      <GlobalStyle />
      {isShowingDelete && (
        <DeleteMoviePopup
          hideDelete={toggleDelete}
          setIsActiveBackdrop={setIsActiveBackdrop}
        />
      )}
      {isShowingEdit && (
        <EditMoviePopup
          hideEdit={toggleEdit}
          setIsActiveBackdrop={setIsActiveBackdrop}
        />
      )}
      {isShowingAdd && (
        <AddMoviePopup
          hideAdd={toggleAdd}
          isShowingAdd={isShowingAdd}
          setIsActiveBackdrop={setIsActiveBackdrop}
        />
      )}
      <Header
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
        hideAdd={toggleAdd}
        setIsActiveBackdrop={setIsActiveBackdrop}
      />
      <Catalog
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        hideEdit={toggleEdit}
        hideDelete={toggleDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
      />
      <Footer />
    </StyledApp>
  );
};

export default App;
