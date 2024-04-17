import { useEffect, useState } from 'react';

type Breakpoint = 'small' | 'medium';

interface Breakpoints {
  small: boolean;
  medium: boolean;
}

export const useResponsive = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>(() =>
    getCurrentBreakpoints(),
  );

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoints = getCurrentBreakpoints();
      setBreakpoints(newBreakpoints);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoints;
};

const getCurrentBreakpoints = (): Breakpoints => {
  const breakpoints: Record<Breakpoint, string> = {
    small: '(min-width: 900px)',
    medium: '(min-width: 1500px)',
  };

  const currentBreakpoints: Breakpoints = {
    small: window.matchMedia(breakpoints.small).matches,
    medium: window.matchMedia(breakpoints.medium).matches,
  };

  return currentBreakpoints;
};
