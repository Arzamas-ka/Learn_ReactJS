import usePopupToggle from 'hooks/usePopupToggle';
import React, { useState } from 'react';

export const ModalsContext = React.createContext(null);

const ModalsContextProvider = ({ children }) => {
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false);

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
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextProvider;
