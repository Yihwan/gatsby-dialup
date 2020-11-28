import styled from '@emotion/styled';

export const MagicForeground = styled.div<{ backgroundSrc: string; }>`
  width: 100%;
  height: 100%;

  ${({ backgroundSrc }) => `background-image: url(${backgroundSrc});`}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;