import React, { FC, useState } from 'react';

import { SelectProps } from './models';
import {
  StyledSelectWrapper,
  StyledSelectTitle,
  StyledSelectMain,
  StyledSelectOver,
  StyledSelectLabel,
  StyledSelectInput,
} from './style';

import { SELECT_OPTIONS } from '@constants';

const Select: FC<SelectProps> = () => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleOnSelected = (selectedOption) => {
    if (selected.includes(selectedOption)) {
      const newSelected = selected.filter(
        (option) => option !== selectedOption,
      );
      setSelected(newSelected);
    } else {
      const newSelected = [...selected, selectedOption];
      setSelected(newSelected);
    }
  };

  const options = SELECT_OPTIONS.map((option) => {
    return (
      <StyledSelectLabel key={option}>
        <StyledSelectInput
          type="checkbox"
          id={option}
          onChange={() => {
            handleOnSelected(option);
          }}
        />
        {option}
      </StyledSelectLabel>
    );
  });

  const value = selected.join(' ');

  console.log('selected: ', selected);

  return (
    <StyledSelectWrapper>
      <StyledSelectTitle>Genre</StyledSelectTitle>
      <StyledSelectMain
        defaultValue={value}
        type="text"
        onClick={() => setOpen((isOpen) => !isOpen)}
        placeholder="Select Genre"
      ></StyledSelectMain>
      {isOpen && <StyledSelectOver>{options}</StyledSelectOver>}
    </StyledSelectWrapper>
  );
};

export default Select;
