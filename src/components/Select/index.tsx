import React, { FC, useState } from 'react';

// types and styles
import { SelectProps } from './models';
import {
  StyledSelectWrapper,
  StyledSelectTitle,
  StyledSelectMain,
} from './style';

const Select: FC<SelectProps> = ({ data, onSelectChange }) => {
  const [dataSelect] = useState(data);
  const [selectedData, updateSelectedData] = useState('');

  const handleChange = (event) => {
    updateSelectedData(event.target.value);

    if (onSelectChange) onSelectChange(selectedData);
  };

  let options = dataSelect.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <StyledSelectWrapper>
      <StyledSelectTitle>Genre</StyledSelectTitle>
      <StyledSelectMain name="genre" onChange={handleChange}>
        <option hidden>Select Genre</option>
        {options}
      </StyledSelectMain>
    </StyledSelectWrapper>
  );
};

export default Select;
