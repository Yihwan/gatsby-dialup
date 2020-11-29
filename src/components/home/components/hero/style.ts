import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { SPACER, MEDIA_QUERIES } from 'consts';

export const Hero = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  align-items: start; 

  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${SPACER.xlarge};
  }
`;

const glitchStyles = css`
  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  } 
  
  &:after {
    color: #f0f;
    z-index: -2;
    transform: translate(${SPACER.x2small}, ${SPACER.x2small});
  } 
  
  &:before {
    color: #0ff;
    z-index: -1;
    transform: translate(-${SPACER.x2small}, -${SPACER.x2small});
  }
`;

export const Heading = styled.h1<{ isMagicConnected: boolean }>`
  position: relative;
  font-family: "EB Garamond", serif; 
  font-size: 6rem; 
  padding-bottom: ${SPACER.base};

  letter-spacing: -0.05em;
  ${MEDIA_QUERIES.mdUp} {
    font-size: 8.5rem;
    letter-spacing: -0.07em;
  }

  ${({ isMagicConnected }) => isMagicConnected && glitchStyles}
`;

export const Asset = styled.div`
  display: flex;
  justify-content: center;
`;