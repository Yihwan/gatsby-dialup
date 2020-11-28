import React from 'react';

import DialupSteps from './components/dialupSteps';
import Magic from './components/magic';
import Features from './components/features';

const Gallery = ({ 
  isMagicActivated,
  isMagicConnected,
} : { 
  isMagicActivated: boolean; 
  isMagicConnected: boolean; 
}) => {
  if (isMagicActivated && !isMagicConnected) {
    return <DialupSteps />;
  }
  
  if (isMagicActivated && isMagicConnected) {
    return <Magic />;
  }

  return <Features />;
};

export default Gallery;