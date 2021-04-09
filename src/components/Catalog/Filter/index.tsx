import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA, API_BASE, API_FILTER } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { fetchMovies, filterItem, filterMovies } from 'actions/actions';

const Filter: FC = () => {
  const dispatch = useDispatch();
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}`,
    filterMovies,
  );

  const handleOnItem = useCallback((genre) => {
    dispatch(filterItem(genre));
    if (genre === 'all') {
      getMovies();
    } else {
      filteredMovies(genre);
    }
  }, []);

  return (
    <StyledFilterList>
      {FILTER_DATA.map((item) => (
        <StyledFilterItem key={item} onClick={() => handleOnItem(item)}>
          {item}
        </StyledFilterItem>
      ))}
    </StyledFilterList>
  );
};

export default Filter;
