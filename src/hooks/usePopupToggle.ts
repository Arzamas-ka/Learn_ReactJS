import { useState, useCallback } from 'react';

const usePopupToggle = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [isShowing]);

  return { isShowing, toggle };
};

export default usePopupToggle;
