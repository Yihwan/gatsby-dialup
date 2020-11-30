import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import MagicBackground from './components/magicBackground';
import Hero from './components/hero';
import HotNewsHeadlines from './components/hotNewsHeadlines';
import Gallery from './components/gallery';
import ActionCards from './components/actionCards';
// @ts-ignore
import dialupWindowdipper from './sounds/dialup-windowdipper.mp3';

// Sync with values in renderAtSecondsSinceActivation in dialupSteps/metadata.
const TIME_TO_CONNECT_MAGIC_IN_SECONDS = 29.5;

const Home = () => {
  const [isMagicActivated, setIsMagicActivated] = useState(false);
  const [isMagicConnected, setIsMagicConnected] = useState(false);
  const [play, { stop }] = useSound(dialupWindowdipper);

  useEffect(() => {
    play();

    const connectMagic = setTimeout(() => {
      setIsMagicConnected(true);
    }, TIME_TO_CONNECT_MAGIC_IN_SECONDS * 1000);

    if (!isMagicActivated) {
      stop();
      setIsMagicConnected(false);
      clearTimeout(connectMagic);
    }

    return () => {
      clearTimeout(connectMagic);
      stop();
    };
  }, [isMagicActivated]);

  return(
    <>
      {isMagicConnected && <MagicBackground />}
      <Hero 
        isMagicConnected={isMagicConnected}
      />
      <HotNewsHeadlines />
      <Gallery 
        isMagicActivated={isMagicActivated}
        isMagicConnected={isMagicConnected}
      />
      <ActionCards 
        isMagicActivated={isMagicActivated}
        setIsMagicActivated={setIsMagicActivated} 
      />
    </>
  );
};

export default Home;
