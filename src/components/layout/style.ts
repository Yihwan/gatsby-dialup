import styled from '@emotion/styled';

import { BREAKPOINTS, SPACER } from 'consts';

export const Layout = styled.div`
  width: 100vw; 
  min-height: 100vh;
  padding: 0 ${SPACER.base} ${SPACER.base};
  position: relative;

  > * {
    margin: 0 auto;
    max-width: ${BREAKPOINTS.md}px; 
    display: grid;
  }
`;