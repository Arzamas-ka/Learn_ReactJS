import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA, API_BASE, API_FILTER } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { fetchMovies, filterItem, filterMovies } from 'actions/actions';

const Filter: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState('all');
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}`,
    filterMovies,
  );

  const handleOnItem = useCallback((genre) => {
    history.push('/');
    setActive(genre);
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
        <StyledFilterItem
          key={item}
          onClick={() => handleOnItem(item)}
          active={active}
          item={item}
        >
          {item}
        </StyledFilterItem>
      ))}
    </StyledFilterList>
  );
};

export default Filter;
