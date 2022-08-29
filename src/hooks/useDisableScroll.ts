import { useEffect } from 'react';

/**
 * Hook to disable scroll on `<body>` as long as the component is mounted.
 * One can also render it conditionally to toggle scroll.
 */
const useDisableScroll = () => {
  useEffect(() => {
    const previousState = document.body.style.overflow ?? 'auto';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousState;
    };
  }, []);

  return null;
};

export default useDisableScroll;
