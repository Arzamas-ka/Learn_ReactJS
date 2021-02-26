import { SyntheticEvent } from 'react';

export type StyledButton =
  | (Omit<JSX.IntrinsicElements['button'], 'view' | 'className'> & 'button')
  | 'submit' | 'reset';

export interface ButtonProps {
  text: string;
  view: StyledButton;
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: SyntheticEvent<Element, Event>) => void;
}
