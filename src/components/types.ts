import { FixedObject, FluidObject } from 'gatsby-image';

export type EnrichedFixedObjectType = FixedObject & { originalName: string };

export type FixedImageType = {
  childImageSharp: { 
    fixed: EnrichedFixedObjectType;
  }
}

export type EnrichedFluidObjectType = FluidObject & { originalName: string };

export type FluidImageType = {
  childImageSharp: { 
    fluid: EnrichedFluidObjectType;
  }
}