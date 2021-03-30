import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StyledFilterList, StyledFilterItem } from './style';

import { FILTER_DATA } from '@constants';

import { getFilterMovies, getMovies } from 'api';

const Filter: FC = () => {
  const dispatch = useDispatch();

  const handleOnItem = useCallback(({ currentTarget }) => {
    const genre = currentTarget.innerHTML;

    console.log('genre: ', genre);

    if (genre === 'all') {
      dispatch(getMovies());
    } else {
      dispatch(getFilterMovies(genre));
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
