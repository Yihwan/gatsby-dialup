import React from 'react';

import useMagic from 'utils/magic/useMagic';

import * as Styled from './style';

const MagicBackground = () => {
  const { src, alt } = useMagic({ placement: 'background' });

  return(
    <Styled.MagicBackground 
      role="img"
      aria-label={alt}
      backgroundSrc={src}
    />
  );
};

export default MagicBackground;