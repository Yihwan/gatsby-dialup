import styled from '@emotion/styled';

import { SPACER, BREAKPOINTS, MEDIA_QUERIES } from 'consts';

export const Heading = styled.h1`
  font-family: "EB Garamond",serif;
  font-size: 6rem;
  letter-spacing: -0.05em;
  margin-bottom: ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
    font-size: 8.5rem;
  }
`;

export const Title = styled.h2`
  font-family: Chicago,system-ui;
  letter-spacing: -0.05em;
  margin-top: ${SPACER.large};
`;

export const Paragraph = styled.p`
  max-width: ${BREAKPOINTS.sm}px;
  margin-top: 1.2rem;
  line-height: 1.2;
`;