import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { EnrichedFixedObjectType, FixedImageType } from 'components/types';

import DIALUP_SEQUENCE_METADATA, { DialupStepType } from './metadata';
import * as Styled from '../style';

type EnrichedDialupStepType = DialupStepType & { 
  name: string;
  fixed: EnrichedFixedObjectType;
};

const DialupSteps = () => {
  const { 
    dialupSteps: { 
      nodes: dialupImages, 
    },
  } = useStaticQuery(graphql`
    query {
     dialupSteps: allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "gallery/dialupSteps" }
      }) {
        nodes {
          childImageSharp {
            fixed(width: 223) {
              originalName
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const enrichedDialupStepData = dialupImages.map(({ childImageSharp: { fixed } }: FixedImageType) => ({
    name: fixed.originalName,
    fixed, 
    ...DIALUP_SEQUENCE_METADATA[fixed.originalName],
  }))
    .sort((a: EnrichedDialupStepType, b: EnrichedDialupStepType) => (
      a.order - b.order
    ));

  return(
    <Styled.Gallery>
      {enrichedDialupStepData.map((dialupStep: EnrichedDialupStepType) => (
        <Styled.Card key={dialupStep.name}>
          <Img fixed={dialupStep.fixed}/>
        </Styled.Card>
      ))}
    </Styled.Gallery>
  );
};

export default DialupSteps;