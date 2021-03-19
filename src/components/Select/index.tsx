import React, { FC, useState } from 'react';

import { SelectTypes } from './models';
import {
  Select as SelectStyled,
  SelectTitle,
  SelectMain,
} from './style';

const Select: FC<SelectTypes> = ({ data, onSelectChange }) => {
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
    <SelectStyled>
      <SelectTitle>Genre</SelectTitle>
      <SelectMain name="genre" onChange={handleChange}>
        <option hidden>Select Genre</option>
        {options}
      </SelectMain>
    </SelectStyled>
  );
};

export default Select;
