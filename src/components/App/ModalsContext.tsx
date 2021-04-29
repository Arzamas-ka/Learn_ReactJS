import * as React from 'react';
import { useState, createContext } from 'react';

import usePopupToggle from 'hooks/usePopupToggle';

export const ModalsContext = createContext(null);

const ModalsContextProvider = ({ children }) => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);

  const [movieDetails, setMovieDetails] = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);
  const { isShowing: isShowingAdd, toggle: toggleAdd } = usePopupToggle();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = usePopupToggle();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = usePopupToggle();
  const {
    isShowing: isShowingCongratulations,
    toggle: toggleCongratulations,
  } = usePopupToggle();

  return (
    <ModalsContext.Provider
      value={{
        isActiveBackdrop,
        setIsActiveBackdrop,
        isShowingAdd,
        toggleAdd,
        isShowingEdit,
        toggleEdit,
        isShowingDelete,
        toggleDelete,
        isShowingCongratulations,
        toggleCongratulations,
        movieDetails,
        setMovieDetails,
        setLoadingMovieDetails,
        setErrorMovieDetails,
        loadingMovieDetails,
        errorMovieDetails,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextProvider;
