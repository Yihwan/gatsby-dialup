import React, { useEffect } from 'react';
import Typed from 'typed.js';

import { TYPED_OPTIONS } from './constants';
import { 
  QuoteBarContainer,
  CaptionContainer, 
  QuoteContainer,
} from './style';

const HotNewsHeadlines = () => {
  useEffect(() => {
    const typed = new Typed('#typed', TYPED_OPTIONS);

    return () => typed.destroy();
  }, []);

  return(
    <QuoteBarContainer>
      <CaptionContainer>Hot News Headlines</CaptionContainer>
      <QuoteContainer id="typed" />
    </QuoteBarContainer>
  );
};

export default HotNewsHeadlines; 