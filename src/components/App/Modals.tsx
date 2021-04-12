import React, { useContext } from 'react';

import { ModalsContext } from '../App/ModalsContext';

import AddMoviePopup from 'components/AddMoviePopup';
import CongratulationsPopup from 'components/CongratulationsPopup';
import DeleteMoviePopup from 'components/DeleteMoviePopup';
import EditMoviePopup from 'components/EditMoviePopup';

const Modals = () => {
  const {
    isShowingDelete,
    toggleDelete,
    setIsActiveBackdrop,
    isShowingEdit,
    toggleEdit,
    isShowingAdd,
    toggleAdd,
    toggleCongratulations,
    isShowingCongratulations,
  } = useContext(ModalsContext);

  return (
    <>
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
    </>
  );
};

export default Modals;
