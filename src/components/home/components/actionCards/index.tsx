import React, { Dispatch, SetStateAction } from 'react';
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
const ActionCards = ({ 
  isMagicActivated,
  setIsMagicActivated, 
} : { 
  isMagicActivated: boolean;
  setIsMagicActivated: Dispatch<SetStateAction<boolean>>;
}) => {
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

  const magicActionData = enrichedActionData
    .find((data: EnrichedActionDataType) => (
      data.name === (isMagicActivated ? 'magic-on.jpg' : 'magic.jpg')
    ));
    
  return(
    <>
      <Styled.ActionCards>
        {enrichedActionData
          .filter((data: EnrichedActionDataType) => data.type === 'link')
          .slice(0, 4)
          .map((action: EnrichedActionDataType) => (
            <Styled.LinkCard 
              key={action.name} 
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={action.fluid} alt={action.alt} />
            </Styled.LinkCard>
          ))}
        <Styled.ButtonCard 
          key="magic"
          onClick={() => setIsMagicActivated(prevState => !prevState)}
        >
          <Img fluid={magicActionData.fluid} alt={magicActionData.alt} />
        </Styled.ButtonCard>
      </Styled.ActionCards>
    </>
  );
};

export default ActionCards;
