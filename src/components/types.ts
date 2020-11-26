import { FixedObject, FluidObject } from 'gatsby-image';

export type FixedImageType = {
  childImageSharp: { 
    fixed: FixedObject & { originalName: string };
  }
}

export type FluidImageType = {
  childImageSharp: { 
    fluid: FluidObject & { originalName: string };
  }
}