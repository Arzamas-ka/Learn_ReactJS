import { SyntheticEvent } from 'react';

export type StyledButton =
  | (Omit<JSX.IntrinsicElements['button'], 'type' | 'className'> & 'add')
  | 'search';

export interface ButtonProps {
  text: string;
  type: StyledButton;
  onClick: (event: SyntheticEvent<Element, Event>) => void;
}
