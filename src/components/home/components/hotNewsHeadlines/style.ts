import styled from '@emotion/styled';

// @ts-ignore
import { SPACER, MEDIA_QUERIES } from 'src/constants';

export const QuoteBarContainer = styled.div`
  background-color: hsla(270, 50%, 40%);
  border: 1px solid black;
  display: grid;
  font-family: Chicago, system-ui;

  grid-template-columns: 1fr;
  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(3, 1fr);
  }

  > div {
    padding: ${SPACER.xsmall} ${SPACER.small};
    ${MEDIA_QUERIES.mdUp} {
      padding: ${SPACER.xsmall} ${SPACER.base};
    }
  }
`;
  
export const CaptionContainer = styled.div`
  color: white;
  border: 2px outset hsla(270, 50%, 80%);

  ${MEDIA_QUERIES.mdUp} {
    text-align: right;
  }
`;

export const QuoteContainer = styled.div`
  background-color: hsla(270, 50%, 80%);
  border: 2px inset hsla(270, 50%, 96%);

  ${MEDIA_QUERIES.mdUp} {
    grid-column: 2 / 4;
  }
`;