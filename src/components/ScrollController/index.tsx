import { ReactNode, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export const ScrollController = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
  }, [location.key, navigationType]);

  return children;
};
