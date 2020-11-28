import styled from '@emotion/styled';

import { SPACER } from 'consts';

export const Footer = styled.footer`
  justify-content: center;
  background-color: white;
  text-align: center;
  padding: ${SPACER.small} 0;

  > nav li {
    display: inline;

    &:not(:last-of-type):after {
      content: ' | ';
    }
  }
`;