import React from 'react';

import IconOrbit from './iconOrbit';
import * as Styled from './style';

const Hero = ({ isMagicConnected }: { isMagicConnected: boolean }) => (
  <Styled.Hero>
    <Styled.Heading data-text="Gatsby" isMagicConnected={isMagicConnected}>
      Gatsby
    </Styled.Heading>
    <Styled.Asset>
      <IconOrbit isMagicConnected={isMagicConnected}/>
    </Styled.Asset>
  </Styled.Hero>
);

export default Hero;