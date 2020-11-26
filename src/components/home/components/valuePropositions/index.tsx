import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { EnrichedFixedObjectType, FixedImageType } from 'components/types';

import VALUE_PROPOSITIONS_METADATA, { ValuePropositionMetadataType } from './metadata';
import * as Styled from './style';

type EnrichedValuePropositionType = ValuePropositionMetadataType & { 
  name: string;
  fixed: EnrichedFixedObjectType;
};

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
            fixed(width: 128, height: 128) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const enrichedValuePropositionData = valuePropositionImages.map(({ childImageSharp: { fixed } }: FixedImageType) => ({
    name: fixed.originalName,
    fixed, 
    ...VALUE_PROPOSITIONS_METADATA[fixed.originalName],
  }))
    .sort((a: EnrichedValuePropositionType, b: EnrichedValuePropositionType) => (
      a.order - b.order
    ));

  return(
    <Styled.ValuePropositions>
      {enrichedValuePropositionData.map((valueProposition: EnrichedValuePropositionType) => (
        <Styled.Card key={valueProposition.name}>
          <Img fixed={valueProposition.fixed} alt={valueProposition.alt}/>
          <Styled.Text>{valueProposition.caption}</Styled.Text>
        </Styled.Card>
      ))}
    </Styled.ValuePropositions>
  );
};

export default ValuePropositions;