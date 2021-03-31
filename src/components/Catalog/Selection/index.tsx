import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  StyledSelectionSelect,
  StyledSelectionOption,
  StyledSelectionTitle,
  StyledSelectionContainer,
} from './style';

import { SELECTION_DATA } from '@constants';

import { getSortByMovies } from 'api';

const Selection: FC = () => {
  const dispatch = useDispatch();

  const handleOnItem = useCallback(({ target }) => {
    const sortBy = target.value;

    dispatch(getSortByMovies(sortBy));
  }, []);

  return (
    <StyledSelectionContainer>
      <StyledSelectionTitle>Sort by</StyledSelectionTitle>
      <StyledSelectionSelect onChange={handleOnItem}>
        {SELECTION_DATA.map((item) => (
          <StyledSelectionOption key={item} value={item}>
            {item}
          </StyledSelectionOption>
        ))}
      </StyledSelectionSelect>
    </StyledSelectionContainer>
  );
};

export default Selection;
