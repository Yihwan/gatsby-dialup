import styled from '@emotion/styled';

import { SPACER, MEDIA_QUERIES } from 'consts';

export const Hero = styled.div`
  display: grid; 
  grid-template-columns: 1fr;

  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${SPACER.xlarge};
  }
`;

export const PrimaryHeading = styled.h1`
  font-family: "EB Garamond", serif; 
  font-size: 100px; 
  padding-bottom: ${SPACER.base};

  letter-spacing: -0.05em;
  ${MEDIA_QUERIES.mdUp} {
    font-size: 150px;
    letter-spacing: -0.07em;
  }
`;

export const HeroAsset = styled.div`
  display: flex;
  justify-content: center;
`;