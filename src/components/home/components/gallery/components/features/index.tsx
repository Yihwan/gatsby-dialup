import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { EnrichedFixedObjectType, FixedImageType } from 'components/types';

import FEATURES_METADATA, { FeatureMetadataType } from './metadata';
import * as Styled from '../style';

type EnrichedFeatureType = FeatureMetadataType & { 
  name: string;
  fixed: EnrichedFixedObjectType;
};

const Features = () => {
  const { 
    features: { 
      nodes: featureImages, 
    },
  } = useStaticQuery(graphql`
      query {
        features: allFile(filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "gallery/features" }
        }) {
          nodes {
            childImageSharp {
              fixed(width: 128, height: 128) {
                originalName
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    `);

  const enrichedFeatureData = featureImages.map(({ childImageSharp: { fixed } }: FixedImageType) => ({
    name: fixed.originalName,
    fixed, 
    ...FEATURES_METADATA[fixed.originalName],
  }))
    .sort((a: EnrichedFeatureType, b: EnrichedFeatureType) => (
      a.order - b.order
    ));
  
  return(
    <Styled.Gallery>
      {enrichedFeatureData.map((feature: EnrichedFeatureType) => (
        <Styled.Card key={feature.name}>
          <Img fixed={feature.fixed} alt={feature.alt}/>
          <Styled.Text>{feature.caption}</Styled.Text>
        </Styled.Card>
      ))}
    </Styled.Gallery>
  );
};

export default Features;