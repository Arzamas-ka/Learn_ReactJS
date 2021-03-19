import { ChangeEvent } from 'react';

export interface SelectTypes {
  data: {
    id: number;
    name: string;
  }[];
  onSelectChange: (selectType:string) => void;
}
