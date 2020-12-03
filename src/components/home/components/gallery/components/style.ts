import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACER } from 'consts';

export const Gallery = styled.section`
  display: grid; 
  justify-items: center;
  padding: ${SPACER.large} 0;

  grid-template-columns: 1fr;
  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  width: 100%;
  min-height: 13.5rem;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ${MEDIA_QUERIES.mdUp} {
    &:not(:last-of-type) {
      border-right: 1px solid #b9b9b9;
    }
  }
`;

export const Text = styled.h2`
  font-family: "EB Garamond", serif; 
  text-align: center; 
  font-size: 24px; 
  letter-spacing: -0.04em;

  margin-top: ${SPACER.base};
`;