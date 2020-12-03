import React from 'react';

import useMagic from 'utils/magic/useMagic';

import * as Styled from './style';

const MagicForeground = () => {
  const { src, alt } = useMagic({ placement: 'foreground' });

  return(
    <Styled.MagicForeground 
      role="img"
      aria-label={alt}
      backgroundSrc={src} 
    />
  );
};

export default MagicForeground; 