import { SyntheticEvent } from 'react';

export type StyledButton =
  | (Omit<JSX.IntrinsicElements['button'], 'view' | 'className'> & 'button')
  | 'submit';

export interface ButtonProps {
  text: string;
  // type: StyledButton;
  view: StyledButton;
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: SyntheticEvent<Element, Event>) => void;
}
