import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { isLoadingMovies, errorMovies } from '../actions/actions';

export const useApiRequest = (method, endpoint, action) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (params = '', body = {}) => {
      console.log('params: ', params);
      console.log('URL:', `${endpoint}${params}`);

      dispatch(isLoadingMovies());
      axios[method](`${endpoint}${params}`, body)
        .then(({ data }) => {
          dispatch(action(data));
        })
        .catch((error) => {
          dispatch(errorMovies());
        });
    },
    [method, endpoint, action],
  );

  return { fetchData };
};
