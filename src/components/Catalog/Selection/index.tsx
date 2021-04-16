import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  StyledSelectionSelect,
  StyledSelectionOption,
  StyledSelectionTitle,
  StyledSelectionContainer,
} from './style';

import { API_SORT_BY, SELECTION_DATA } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { filterItem, filterMovies } from 'actions/actions';

const Selection: FC = () => {
  const dispatch = useDispatch();
  const { fetchData: fetchSortByMovies } = useApiRequest(
    'get',
    API_SORT_BY,
    filterMovies,
  );

  const handleOnItem = useCallback(({ target }) => {
    const sortBy = target.value;
    dispatch(filterItem(sortBy));

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
