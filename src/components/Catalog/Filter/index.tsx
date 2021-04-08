import React, { FC, useCallback } from 'react';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA, API_BASE, API_FILTER } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { fetchMovies, filterMovies } from 'actions/actions';

const Filter: FC = () => {
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    API_FILTER,
    filterMovies,
  );

  const handleOnItem = useCallback(({ currentTarget }) => {
    const genre = currentTarget.innerHTML;

    if (genre === 'all') {
      getMovies();
    } else {
      filteredMovies(genre);
    }
  }, []);

  return (
    <StyledFilterList>
      {FILTER_DATA.map((item) => (
        <StyledFilterItem key={item} onClick={handleOnItem}>
          {item}
        </StyledFilterItem>
      ))}
    </StyledFilterList>
  );
};

export default Filter;
