export type DialupStepType = {
  order: number; 
  delayInSeconds: number;
  alt: string; 
}

const DIALUP_SEQUENCE_METADATA: {
  [key: string]: DialupStepType
} = {
  'dialup_1.png': {
    order: 1, 
    delayInSeconds: 3,
    alt: '1',
  },
  'dialup_2.png': {
    order: 2, 
    delayInSeconds: 3,
    alt: '1',
  },
  'dialup_3.png': {
    order: 3, 
    delayInSeconds: 3,
    alt: '1',
  },
};

export default DIALUP_SEQUENCE_METADATA;