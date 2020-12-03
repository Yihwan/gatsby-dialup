import { useState, useEffect } from 'react';

import { BACKGROUND_GIFS, FOREGROUND_GIFS } from './gifs';

export const extractFilename = (src: string) => (
  src
);

const getRandom = (array: Array<any>) => (
  array[Math.floor(Math.random() * array.length)]
);

const useMagic = ({ 
  transitionTimeInSeconds = 4000,
  placement,
} : {
  transitionTimeInSeconds?: number;
  placement: 'foreground' | 'background';
}) => {
  let gifs = placement === 'foreground' ? FOREGROUND_GIFS : BACKGROUND_GIFS;
  const [gifConfig, setGifConfig] = useState(getRandom(gifs));

  useEffect(() => {
    const interval = setInterval(() => {
      setGifConfig(getRandom(gifs));
    }, transitionTimeInSeconds);

    return () => clearInterval(interval);
  }, [transitionTimeInSeconds]);

  return gifConfig;
};

export default useMagic; 