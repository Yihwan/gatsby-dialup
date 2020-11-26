import styled from '@emotion/styled';

import { SPACER } from 'consts';

export const Footer = styled.footer`
  margin: ${SPACER.base} 0;
  display: flex;
  justify-content: center;

  > nav li {
    display: inline-block;
    margin: 0 ${SPACER.small};
  }
`;