export type SceneId =
  | 'invitation'
  | 'classmates'
  | 'grade11'
  | 'gap'
  | 'and-yet'
  | 'karon-naa'
  | 'eleven-months'
  | 'everyday'
  | 'treasure'
  | 'prayer'
  | 'finale'
  | 'sealed';

export interface LetterSectionData {
  id: SceneId;
  sceneNumber: string;
  sceneTitle: string;
  paragraphs: string[];
  handwrittenNote?: string;
  uiCommentary?: string;
  targetVolume: number;
}

export interface PhotoMemory {
  id: number;
  title: string;
  caption: string;
  dateStr?: string;
  illustrationType?: 'holding-hands' | 'school-glance' | 'stargazing-moment';
  imageUrl?: string;
  fallbackUrls?: string[];
  customUrl?: string;
}

export interface FloatingFragment {
  id: string;
  text: string;
  x: number;
  y: number;
  delay: number;
  size: 'sm' | 'md' | 'lg';
}
