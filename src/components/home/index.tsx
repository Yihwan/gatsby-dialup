import React, { useState, useEffect } from 'react';

import MagicBackground from './components/magicBackground';
import Hero from './components/hero';
import HotNewsHeadlines from './components/hotNewsHeadlines';
import Gallery from './components/gallery';
import ActionCards from './components/actionCards';

const INITIAL_MAGIC_DELAY_IN_SECONDS = 3;

const Home = () => {
  const [isMagicActivated, setIsMagicActivated] = useState(false);
  const [isMagicConnected, setIsMagicConnected] = useState(false);

  useEffect(() => {
    const connectMagic = setTimeout(() => {
      setIsMagicConnected(true);
    }, INITIAL_MAGIC_DELAY_IN_SECONDS * 1000);

    if (!isMagicActivated) {
      setIsMagicConnected(false);
      clearTimeout(connectMagic);
    }

    return () => clearTimeout(connectMagic);
  }, [isMagicActivated]);

  return(
    <>
      {isMagicActivated && isMagicConnected && <MagicBackground />}
      <Hero />
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
