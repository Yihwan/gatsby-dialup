import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

import * as Styled from './style';

const VALUE_PROPOSITIONS = ['build.', 'run.', 'deploy.'];

type ValuePropositionImageType = {
  childImageSharp: { 
    fixed: FixedObject;
  }
  originalName: string;
}

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
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  return(
    <Styled.ValuePropositions>
      {valuePropositionImages.map((image: ValuePropositionImageType, idx: number) => (
        <Styled.Card key={`${idx}-${image.originalName}`}>
          <Img fixed={image.childImageSharp.fixed} />
          <Styled.Text>{VALUE_PROPOSITIONS[idx]}</Styled.Text>
        </Styled.Card>
      ))}
    </Styled.ValuePropositions>
  );
};

export default ValuePropositions;