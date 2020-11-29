import styled from '@emotion/styled';

export const MagicBackground = styled.div<{ backgroundSrc: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -3;

  ${({ backgroundSrc }) => `background-image: url(${backgroundSrc});`}
  background-repeat: round;
`;