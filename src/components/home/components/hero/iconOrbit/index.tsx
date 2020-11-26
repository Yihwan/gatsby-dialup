import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { FixedImageType } from 'components/types';

import * as Styled from './style';

const extractAltTextFromFilename = (filename: string) => (
  filename.split('.')[0].split('-').join(' ')
);

const IconOrbit = () => {
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
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
      
      gatsbyWordmark: file(relativePath: { eq: "hero/gatsby-monogram-purple.png" }) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return(
    <Styled.OuterOrbit>
      {iconImages.slice(0, 8).map(({ childImageSharp: { fixed } }: FixedImageType, idx: number) => (
        <Styled.Icon 
          key={fixed.originalName} 
          orbit="outer"
          idx={idx}
        >
          <Styled.AxialRotation 
            orbit="outer"
            idx={idx}
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
          <Styled.AxialRotation orbit="outer" idx={0}>
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