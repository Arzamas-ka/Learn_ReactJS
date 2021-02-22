import { SyntheticEvent } from 'react';

export interface ButtonProps {
  text: string;
  onClick: (event: SyntheticEvent<Element, Event>) => void;
}
