import styled from '@emotion/styled';

export const MagicBackground = styled.div<{ background: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -1;

  ${({ background }) => `background-image: url(${background});`}
  background-repeat: round;
`;