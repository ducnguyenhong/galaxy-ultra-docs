import { useEffect, useState } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') {
    return [0, 0];
  }

  const { innerWidth: width, innerHeight: height } = window;
  return [
    width,
    height,
  ];
}

export const useDimension = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
