import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { FluidImageType } from 'components/types';

import * as Styled from './style';
import FEATURED_ACTIONS_METADATA from './metadata';

type EnrichedFeaturedActionDataType = {
  order: number; 
  alt: string;
  href?: string;
  name: string;
  fluid: FluidObject & { originalName: string };
  type: 'link' | 'button';
}

// TODO: Magic -> scroll to top on mobile. 
const FeaturedActionCards = () => {
  const { 
    allFile: { 
      nodes: featuredActionImages, 
    },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "featuredActions" }
      }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  const enrichedFeaturedActionData = featuredActionImages
    .map(({ childImageSharp: { fluid } }: FluidImageType) => ({
      name: fluid.originalName,
      fluid: fluid,
      ...FEATURED_ACTIONS_METADATA[fluid.originalName],
    }))
    .sort((a: EnrichedFeaturedActionDataType, b: EnrichedFeaturedActionDataType) => (
      a.order - b.order
    ));

  return(
    <Styled.FeaturedActionCards>
      {enrichedFeaturedActionData.map((featuredAction: EnrichedFeaturedActionDataType) => {
        if (featuredAction.type === 'button') {
          return(
            <Styled.ButtonCard 
              key={featuredAction.name} 
              tabIndex={featuredAction.order}
            >
              <Img fluid={featuredAction.fluid} alt={featuredAction.alt} />
            </Styled.ButtonCard>
          );
        }

        return(
          <Styled.LinkCard 
            key={featuredAction.name} 
            tabIndex={featuredAction.order}
            href={featuredAction.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={featuredAction.fluid} alt={featuredAction.alt} />
          </Styled.LinkCard>
        );
      })}
    </Styled.FeaturedActionCards>
  );
};

export default FeaturedActionCards;
