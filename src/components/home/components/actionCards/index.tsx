import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { EnrichedFluidObjectType, FluidImageType } from 'components/types';

import ACTIONS_METADATA, { ActionMetadataType } from './metadata';
import * as Styled from './style';

type EnrichedActionDataType = ActionMetadataType & {
  name: string;
  fluid: EnrichedFluidObjectType;
}

// TODO: Magic -> scroll to top on mobile. 
const ActionCards = () => {
  const { 
    allFile: { 
      nodes: actionImages, 
    },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "actionCards" }
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

  const enrichedActionData = actionImages
    .map(({ childImageSharp: { fluid } }: FluidImageType) => ({
      name: fluid.originalName,
      fluid,
      ...ACTIONS_METADATA[fluid.originalName],
    }))
    .sort((a: EnrichedActionDataType, b: EnrichedActionDataType) => (
      a.order - b.order
    ));

  return(
    <Styled.ActionCards>
      {enrichedActionData.map((action: EnrichedActionDataType) => {
        if (action.type === 'button') {
          return(
            <Styled.ButtonCard 
              key={action.name} 
              tabIndex={action.order}
            >
              <Img fluid={action.fluid} alt={action.alt} />
            </Styled.ButtonCard>
          );
        }

        return(
          <Styled.LinkCard 
            key={action.name} 
            tabIndex={action.order}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={action.fluid} alt={action.alt} />
          </Styled.LinkCard>
        );
      })}
    </Styled.ActionCards>
  );
};

export default ActionCards;
