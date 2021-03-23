import { FormEvent } from 'react';
export interface InputProps {
  type: string;
  label: string | null;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  // onChange: (
  //   event: FormEvent<HTMLInputElement> | [Date, Date] | null | '',
  // ) => void;
  onClick?: () => void;
  name: string;
  search?: boolean;
  autoComplete?: string;
  calendar?: string;
}

export interface StyledInputProps {
  search?: boolean;
}
