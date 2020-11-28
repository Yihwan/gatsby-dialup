export type FeatureMetadataType = {
  order: number; 
  caption: string;
  alt: string;
}

const FEATURES_METADATA: {
  [key: string]: FeatureMetadataType
} = {
  'build.png': {
    order: 1,
    caption: 'Build.',
    alt: 'Abstract illustration of construction worker.',
  },
  'run.png': {
    order: 2,
    caption: 'Run.',
    alt: 'Multi-colored outlines of running humans shaped into a forward-moving arrow.',
  },
  'deploy.png': {
    order: 3,
    caption: 'Deploy.',
    alt: 'Floating astronaut revealing the Gatsby wordmark in an open serving plate.',
  },
};

export default FEATURES_METADATA;