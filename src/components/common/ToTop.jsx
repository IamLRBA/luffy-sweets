
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when path changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ToTop;