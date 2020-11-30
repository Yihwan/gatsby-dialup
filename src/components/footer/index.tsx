import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './style';

const Footer = () => (
  <Styled.Footer>
    <nav>
      <ul>
        <li><Link to="/">Dial-up Home</Link></li>
        <li><Link to="/what-is-this">What Is This?</Link></li>
        <li>
          <a
            href="https://yihwan.kim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Who Did This?
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Yihwan/gatsby-dialup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </li>
        <li><Link to="/credits">Credits</Link></li>
      </ul>
    </nav>
  </Styled.Footer>
);

export default Footer;
