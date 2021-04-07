import React, { FC, useCallback } from 'react';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA, API_BASE, API_FILTER } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { fetchMovies } from 'actions/actions';

const Filter: FC = () => {
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filterMovies } = useApiRequest(
    'get',
    API_FILTER,
    fetchMovies,
  );

  const handleOnItem = useCallback(({ currentTarget }) => {
    const genre = currentTarget.innerHTML;

    if (genre === 'all') {
      getMovies();
    } else {
      filterMovies(genre);
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
