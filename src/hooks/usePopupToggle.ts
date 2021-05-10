import { useState, useCallback } from 'react';

// PATTERN: custom hook
const usePopupToggle = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [isShowing]);

  return { isShowing, toggle };
};

export default usePopupToggle;
