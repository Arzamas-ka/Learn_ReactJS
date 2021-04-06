import React, { FC, useCallback } from 'react';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA, API_BASE } from '@constants';
import { getFilterMovies } from 'api';
import { useApiRequest } from 'hooks/useApiRequest';
import { fetchMovies } from 'actions/actions';

const Filter: FC = () => {
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);

  const handleOnItem = useCallback(({ currentTarget }) => {
    const genre = currentTarget.innerHTML;

    if (genre === 'all') {
      getMovies();
    } else {
      // dispatch(getFilterMovies(genre));
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
