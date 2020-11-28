import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACER } from 'consts';

export const Header = styled.nav`
  grid-template-columns: repeat(2, 1fr);
  background-color: black; 
  color: white;
  border: 2px outset silver;
  margin: ${SPACER.base} auto ${SPACER.small};

  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, ${SPACER.large});
  }
`;

export const NavLinks = styled.ul`
  display: grid; 
  font-family: sans-serif, system-ui;
  font-size: 12px;
  letter-spacing: -0.01em;
  grid-column: 1 / 3;
  grid-template-columns: repeat(2, 1fr);

  ${MEDIA_QUERIES.mdUp} {
    grid-template-columns: repeat(4, 1fr);
    grid-column: 2 / 6;
    grid-row: 1 / -1;
  }
`;

// TODO: Clean-up border selectors lol.
export const LinkItem = styled.li`
  min-height: ${SPACER.large};
  display: flex; 
  justify-content: center; 
  align-items: center;

  border-top: 1px solid silver;
  &:nth-of-type(odd) {
    border-right: 1px solid silver;
  }
  &:nth-of-type(n+7) {
    border-bottom: 1px solid silver;
  }

  ${MEDIA_QUERIES.mdUp} {
    border: unset;
    &:nth-of-type(odd) {
      border-right: unset;
    }
    &:nth-of-type(n+7) {
      border-bottom: unset;
    }

    border-left: 1px solid silver;

    &:nth-of-type(-n+4) {
      border-bottom: 1px solid silver;
    }
    &:nth-of-type(4), &:nth-of-type(8) {
      border-right: 1px solid silver;
    }
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  cursor: alias;
`;

export const Bookend = styled.div`
  display: grid;
  padding: ${SPACER.base};
  align-self: center;

  &:first-of-type {
    grid-column: 1 / 2; 
    grid-row: 5 / 6;
    font-family: "EB Garamond",serif;
    font-size: 20px;
    letter-spacing: -0.04em;
  }

  &:last-of-type {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    justify-self: end;

    > a {
      display: flex;
      align-items: center;
    }
  }

  ${MEDIA_QUERIES.mdUp} {
    &:first-of-type, &:last-of-type {
      grid-column: unset;
      grid-row: 1 / -1;
      justify-self: center;
    }
  }
`;

