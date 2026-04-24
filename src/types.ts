import type { ReactNode } from 'react';

export interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface Goal {
  label: string;
  value: string;
}

export interface Phase {
  id: number;
  title: string;
  duration: string;
  icon: ReactNode;
  description: string;
  goals: Goal[];
  toDos: string[];
  avoid: string[];
  exercises: string[];
}

export interface TimelineItem {
  time: string;
  items: string[];
}

export interface Guideline {
  id: string;
  title: string;
  icon: ReactNode;
  items: string[];
}

export interface DailyActivity {
  id: string;
  title: string;
  icon: ReactNode;
  items: string[];
}

export interface Milestone {
  id: string;
  title: string;
  icon: ReactNode;
  items: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  note?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  dosage: string;
  image: string;
  category: string;
}

export interface ExerciseGroup {
  id: string;
  title: string;
  phase: string;
  exercises: Exercise[];
}

export type TabKey = 'phases' | 'timeline' | 'exercises' | 'guidelines';
