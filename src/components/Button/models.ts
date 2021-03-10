import { SyntheticEvent } from 'react';
export interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: SyntheticEvent<Element, Event>) => void;
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
  save?: boolean;
}
