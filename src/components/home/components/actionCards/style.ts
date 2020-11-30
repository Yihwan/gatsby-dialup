import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACER } from 'consts';

export const ActionCards = styled.section`
  display: grid; 
  column-gap: ${SPACER.small};

  grid-template-columns: 1fr;
  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const baseActionStyles = css`
  border: 1px solid #a1a1a1;
  border-radius: ${SPACER.small};
  padding: ${SPACER.x2small};
  box-shadow: 0px 2px 2px silver;
  background-color: white;

  margin: ${SPACER.small} 0;
  ${MEDIA_QUERIES.mdUp} {
    margin: unset; 
  }
`;

export const LinkCard = styled.a`
  ${baseActionStyles}
`;

export const ButtonCard = styled.button`
  ${baseActionStyles}
  cursor: pointer;
`;