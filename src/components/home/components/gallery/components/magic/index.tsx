import React from 'react';

import MagicForeground from './magicForeground';

import * as Styled from '../style';

const Magic = () => (
  <Styled.Gallery>
    {Array.from({ length: 3 }, (_, idx) => (
      <Styled.Card key={`${idx}`}>
        <MagicForeground />
      </Styled.Card>
    ))}
  </Styled.Gallery>
);

export default Magic; 