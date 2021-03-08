import { FormEvent } from 'react';

export interface InputProps {
  type: string;
  label: string | null;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  name: string;
  search?: boolean;
  topic?: boolean;
  release?: boolean;
  movie?: boolean;
  genre?: boolean;
  overview?: boolean;
  runtime?: boolean;
}
