import React, { FC, useState } from 'react';
import { Switch } from 'react-router-dom';

import { GlobalStyle } from '../../styles/style';
import { StyledApp, StyledBackdrop } from './style';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import usePopupToggle from 'hooks/usePopupToggle';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'components/Catalog';
import AddMoviePopup from 'components/AddMoviePopup';
import EditMoviePopup from 'components/EditMoviePopup';
import DeleteMoviePopup from 'components/DeleteMoviePopup';
import CongratulationsPopup from 'components/CongratulationsPopup';

const App: FC = () => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);
  const [movieDetails, setMovieDetails]: any = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails]: any = useState(true);
  const [errorMovieDetails, setErrorMovieDetails]: any = useState(false);
  const { isShowing: isShowingAdd, toggle: toggleAdd } = usePopupToggle();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = usePopupToggle();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = usePopupToggle();
  const {
    isShowing: isShowingCongratulations,
    toggle: toggleCongratulations,
  } = usePopupToggle();

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
          hideCongratulations={toggleCongratulations}
        />
      )}
      {isShowingCongratulations && (
        <CongratulationsPopup
          hideCongratulations={toggleCongratulations}
          setIsActiveBackdrop={setIsActiveBackdrop}
        />
      )}
      {/* <Switch> */}
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
      {/* </Switch> */}
      <Footer />
    </StyledApp>
  );
};

export default App;
