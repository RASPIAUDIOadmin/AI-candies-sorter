export interface Step {
  title: string;
  description: string | string[];
  icon?: string;
  image?: string;
}

export enum SectionId {
  INTRO = 'intro',
  ASSEMBLY = 'assembly',
  SOFTWARE = 'software',
  TRAINING = 'training',
  INFERENCE = 'inference'
}
