import React from 'react';

import IconOrbit from './iconOrbit';
import * as Styled from './style';

const Hero = () => (
  <Styled.Hero>
    <Styled.PrimaryHeading>Gatsby</Styled.PrimaryHeading>
    <Styled.HeroAsset><IconOrbit /></Styled.HeroAsset>
  </Styled.Hero>
);

export default Hero;