export interface Step {
  title: string;
  description: string | string[];
  icon?: string;
  image?: string;
}

export enum SectionId {
  INTRO = 'intro',
  ASSEMBLY = 'assembly',
  TRAINING = 'training',
  SOFTWARE = 'software',
  TIPS = 'tips'
}