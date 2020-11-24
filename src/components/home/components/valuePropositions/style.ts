import styled from '@emotion/styled';

// @ts-ignore 
import { MEDIA_QUERIES, SPACER } from 'src/constants';

export const ValuePropositions = styled.section`
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
  text-align: center;
  padding: ${SPACER.base};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACER.large};

    &:not(:last-of-type) {
      border-right: 1px solid #b9b9b9;
    }
  }
`;

export const Text = styled.h2`
  font-family: "EB Garamond", serif; 
  text-transform: capitalize; 
  text-align: center; 
  font-size: 24px; 
  letter-spacing: -0.04em;

  padding: ${SPACER.small} 0;
`;