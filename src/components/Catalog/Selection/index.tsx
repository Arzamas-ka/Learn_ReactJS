import React, { FC, useCallback } from 'react';

import {
  StyledSelectionSelect,
  StyledSelectionOption,
  StyledSelectionTitle,
  StyledSelectionContainer,
} from './style';

import { API_SORT_BY, SELECTION_DATA } from '@constants';

import { useApiRequest } from 'hooks/useApiRequest';
import { sortByMovies } from 'actions/actions';

const Selection: FC = () => {
  const { fetchData: fetchSortByMovies } = useApiRequest('get', API_SORT_BY, sortByMovies);

  const handleOnItem = useCallback(({ target }) => {
    const sortBy = target.value;
    fetchSortByMovies(sortBy);
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
