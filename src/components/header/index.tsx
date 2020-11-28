import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './style';

const Header = () => {
  const { gatsbyLogo } = useStaticQuery(graphql`
    query {
      gatsbyLogo: file(relativePath: { eq: "navMenu/gatsby-logo.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return(
    <Styled.Header>
      <Styled.Bookend>
        <Styled.Link
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GatsbyJS
        </Styled.Link>
      </Styled.Bookend>

      <Styled.NavLinks>
        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/use-cases/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Cases
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Features
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/resources/webinars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webinars
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/showcase/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Showcase
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/contributing/community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </Styled.Link>
        </Styled.LinkItem>

        <Styled.LinkItem>
          <Styled.Link 
            href="https://www.gatsbyjs.com/support/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </Styled.Link>
        </Styled.LinkItem>
      </Styled.NavLinks>

      <Styled.Bookend>
        <Styled.Link
          href="https://www.gatsbyjs.com/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img 
            fixed={gatsbyLogo.childImageSharp.fixed}
            alt="Gatsby logo"
          />
        </Styled.Link>
      </Styled.Bookend>
    </Styled.Header>
  );
};

export default Header;
