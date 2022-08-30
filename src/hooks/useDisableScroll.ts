import { useEffect } from 'react';

/**
 * Hook to disable scroll on `<body>` as long as the component is mounted.
 * One can also render it conditionally to toggle scroll.
 */
const useDisableScroll = () => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow ?? 'auto';
    const previousTouchAction = document.body.style.overflow ?? 'auto';
    const previousOverflowScrolling =
      document.body.style['-webkit-overflow-scrolling'] ?? 'auto';
    const previousOverscrollBehavior =
      document.body.style.overscrollBehavior ?? 'auto';

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.body.style['-webkit-overflow-scrolling'] = 'none';
    document.body.style.overscrollBehavior = 'none';

    // Add stable scrollbar gutter to prevent layout shift
    document.documentElement.style.scrollbarGutter = 'stable';

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      document.body.style['-webkit-overflow-scrolling'] =
        previousOverflowScrolling;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, []);

  return null;
};

export default useDisableScroll;
