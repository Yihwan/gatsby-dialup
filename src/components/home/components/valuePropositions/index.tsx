import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { FixedImageType } from 'components/types';

import * as Styled from './style';

const VALUE_PROPOSITIONS = ['build.', 'run.', 'deploy.'];

const ValuePropositions = () => {
  const { 
    allFile: { 
      nodes: valuePropositionImages, 
    },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "valuePropositions" }
      }) {
        nodes {
          childImageSharp {
            fixed(width: 125, height: 125) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  return(
    <Styled.ValuePropositions>
      {valuePropositionImages.map(({ childImageSharp: { fixed } }: FixedImageType, idx: number) => (
        <Styled.Card key={fixed.originalName}>
          <Img fixed={fixed} />
          <Styled.Text>{VALUE_PROPOSITIONS[idx]}</Styled.Text>
        </Styled.Card>
      ))}
    </Styled.ValuePropositions>
  );
};

export default ValuePropositions;