import { FormEvent } from 'react';
export interface InputProps {
  type: string;
  label: string | null;
  placeholder?: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  name: string;
  search?: boolean;
  autoComplete?: string;
  calendar?: string;
  disabled?: boolean;
}

export interface StyledInputProps {
  search?: boolean;
}
