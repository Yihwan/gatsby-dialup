import React from 'react';

import useMagic from 'utils/magic/useMagic';

import * as Styled from './style';

const MagicForeground = () => {
  const gifConfig = useMagic({ placement: 'foreground' });

  return(
    <Styled.MagicForeground 
      role="img"
      aria-label={'TODO'}
      backgroundSrc={gifConfig.src} 
    />
  );
};

export default MagicForeground; 