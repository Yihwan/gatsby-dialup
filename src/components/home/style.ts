import styled from '@emotion/styled';

// @ts-ignore
import { BREAKPOINTS } from 'src/constants';

export const Home = styled.div`
  width: 100vw;
`;

export const MainContent = styled.div`
  margin: 0 auto;
  max-width: ${BREAKPOINTS.md}px; 
  display: grid; 
  
`;

export const StyledThing = styled.div`
  color: red;
`;