import { useDispatch } from 'react-redux';
import { initialState, movies } from './../reducers/movies';
import { useReducer, useCallback } from 'react';
import axios from 'axios';
import { isLoadingMovies, errorMovies } from '../actions/actions';

export const useApiRequest = (method, endpoint, action) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (params = '') => {
      dispatch(isLoadingMovies());
      axios[method](`${endpoint}${params}`)
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
