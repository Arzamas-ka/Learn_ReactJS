import { useState } from 'react';

const usePopup = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return { isShowing, toggle };
};

export default usePopup;
