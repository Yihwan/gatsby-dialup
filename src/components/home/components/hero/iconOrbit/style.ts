import { keyframes, css } from '@emotion/core';
import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACER } from 'consts';

type OrbitType = 'outer' | 'inner';

const REVOLUTION_TIME_IN_SECONDS = 180;
const ORBIT_CONFIG = {
  outer: {
    iconOffset: (idx: number) => idx * 45,
    pixelDimensions: {
      mobile: 240, 
      desktop: 320,
    },
  },
  inner: {
    iconOffset: (idx: number) => (idx * 90) + 22.5,
    pixelDimensions: {
      mobile: 136,
      desktop: 176,
    },
  },
};

const rotateAxial = ({ orbit, idx }: { orbit: OrbitType; idx: number }) => (
  keyframes`
    100% {
      transform: rotate(${-ORBIT_CONFIG[orbit].iconOffset(idx) - 360}deg);
    }
  `
);

export const AxialRotation = styled.div`
  ${({ orbit, idx }: { orbit: OrbitType; idx: number }) => (
    `transform: rotate(${-ORBIT_CONFIG[orbit].iconOffset(idx)}deg);`
  )}

  animation: ${props => css`${rotateAxial(props)} ${REVOLUTION_TIME_IN_SECONDS}s infinite linear;`}
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%;
  margin: -${SPACER.base};

  ${({ orbit, idx }: { orbit: OrbitType; idx: number; }) => (
    `transform: rotate(${ORBIT_CONFIG[orbit].iconOffset(idx)}deg) translate(${ORBIT_CONFIG[orbit].pixelDimensions.mobile / 2}px);`
  )}

  ${MEDIA_QUERIES.smUp} {
    ${({ orbit, idx }: { orbit: OrbitType; idx: number; }) => (
    `transform: rotate(${ORBIT_CONFIG[orbit].iconOffset(idx)}deg) translate(${ORBIT_CONFIG[orbit].pixelDimensions.desktop / 2}px);`
  )
}}
`;

const baseOrbitStyles = (orbit: OrbitType) => (css`
  border: 1px dashed gainsboro; 
  border-radius: 50%; 

  width: ${ORBIT_CONFIG[orbit].pixelDimensions.mobile}px; 
  height: ${ORBIT_CONFIG[orbit].pixelDimensions.mobile}px; 
  
  ${MEDIA_QUERIES.smUp} {
    width: ${ORBIT_CONFIG[orbit].pixelDimensions.desktop}px; 
    height: ${ORBIT_CONFIG[orbit].pixelDimensions.desktop}px; 
  }
`);

export const OuterOrbit = styled.div`
  ${baseOrbitStyles('outer')}

  position: relative;
  margin: ${SPACER.xlarge};
  ${MEDIA_QUERIES.mdUp} {
    margin: ${SPACER.x2large};
  }
  
  animation: revolve ${REVOLUTION_TIME_IN_SECONDS}s infinite linear;
  @keyframes revolve {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const absoluteCenterStyles = css`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InnerOrbit = styled.div`
  ${baseOrbitStyles('inner')}
  ${absoluteCenterStyles}
`;

export const Center = styled.div`
  ${absoluteCenterStyles}
`;