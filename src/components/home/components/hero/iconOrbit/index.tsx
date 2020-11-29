import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { FixedImageType } from 'components/types';

import * as Styled from './style';

const extractAltTextFromFilename = (filename: string) => (
  filename.split('.')[0].split('-').join(' ')
);

const IconOrbit = ({ isMagicConnected }: { isMagicConnected: boolean }) => {
  const { 
    iconNodes: { 
      nodes: iconImages, 
    },
    gatsbyWordmark: { 
      childImageSharp: {
        fixed: fixedGatsbyWordmark,
      },
    },
  } = useStaticQuery(graphql`
    query {
      iconNodes: allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "hero/icons" }
      }) {
        nodes {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
              originalName
            }
          }
        }
      }
      
      gatsbyWordmark: file(relativePath: { eq: "hero/gatsby-monogram-purple.png" }) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return(
    <Styled.OuterOrbit isMagicConnected={isMagicConnected}>
      {iconImages.slice(0, 8).map(({ childImageSharp: { fixed } }: FixedImageType, idx: number) => (
        <Styled.Icon 
          key={fixed.originalName} 
          orbit="outer"
          idx={idx}
        >
          <Styled.AxialRotation 
            orbit="outer"
            idx={idx}
            isMagicConnected={isMagicConnected}
          >
            <Img 
              key={fixed.originalName}
              fixed={fixed}
              alt={extractAltTextFromFilename(fixed.originalName)}
            />
          </Styled.AxialRotation>
        </Styled.Icon>
      ))}

      <Styled.InnerOrbit>
        {iconImages.slice(8, 12).map(({ childImageSharp: { fixed } }: FixedImageType, idx: number) => (
          <Styled.Icon 
            key={fixed.originalName} 
            orbit="inner"
            idx={idx}
          >
            <Styled.AxialRotation 
              orbit="inner"
              idx={idx}
              isMagicConnected={isMagicConnected}
            >
              <Img 
                key={fixed.originalName}
                fixed={fixed}
                alt={extractAltTextFromFilename(fixed.originalName)}
              />
            </Styled.AxialRotation>
          </Styled.Icon>
        ))}

        <Styled.Center>
          <Styled.AxialRotation 
            orbit="outer" 
            idx={0}
            isMagicConnected={isMagicConnected}
          >
            <Img 
              fixed={fixedGatsbyWordmark}
              alt={extractAltTextFromFilename(fixedGatsbyWordmark.originalName)}
            />
          </Styled.AxialRotation>
        </Styled.Center>
      </Styled.InnerOrbit>
    </Styled.OuterOrbit>
  );
};

export default IconOrbit;