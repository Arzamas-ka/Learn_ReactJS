import { useState, useCallback } from 'react';

const usePopup = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, []);

  return { isShowing, toggle };
};

export default usePopup;