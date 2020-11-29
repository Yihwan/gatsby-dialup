export type DialupStepType = {
  order: number; 
  renderAtSecondsSinceActivation: number;
  alt: string; 
}

const DIALUP_SEQUENCE_METADATA: {
  [key: string]: DialupStepType
} = {
  'dialup_1.png': {
    order: 1, 
    renderAtSecondsSinceActivation: 0,
    alt: 'Stationary AOL human icon: Dialup connection initiated.',
  },
  'dialup_2.png': {
    order: 2, 
    renderAtSecondsSinceActivation: 24,
    alt: 'Running AOL human icon: Dialup connection in progress.',
  },
  'dialup_3.png': {
    order: 3, 
    renderAtSecondsSinceActivation: 27,
    alt: 'AOL icon with multiple humans: Dialup connection successful.',
  },
};

export default DIALUP_SEQUENCE_METADATA;