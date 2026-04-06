import { useEffect, useState } from 'react';

const useWindowScrolledPast = (threshold: number) => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    const updatePosition = () => {
      const scrollPosition = window.scrollY;
      setIsPastThreshold(Math.abs(scrollPosition) > threshold);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, [threshold]);

  return isPastThreshold;
};

export default useWindowScrolledPast;
