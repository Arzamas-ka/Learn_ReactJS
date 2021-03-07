import { FormEvent } from 'react';

export interface InputProps {
  type: string;
  view: string;
  name: string;
  label: string | null;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}
