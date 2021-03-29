import { ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';

export interface SelectProps {
  value: any[];
  selected?: any[];
  setSelected?: any;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement> | string[]) => void;
  // onChange: (event: ChangeEvent<HTMLSelectElement>) => (selectedOption: any) => void;
  // onChange?: (event: ChangeEvent<{ arg1: any[] }>) => void;
}
