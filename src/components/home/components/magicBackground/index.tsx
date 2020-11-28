import React from 'react';

import useMagic from 'utils/magic/useMagic';

import * as Styled from './style';

const MagicBackground = () => {
  const gifConfig = useMagic({ placement: 'background' });

  return(
    <Styled.MagicBackground 
      role="img"
      aria-label={'TODO'}
      background={gifConfig.src}
    />
  );
};

export default MagicBackground;