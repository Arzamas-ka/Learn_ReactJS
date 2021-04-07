import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const useApiRequest = (method, endpoint, action) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (params = '', body = {}) => {
      axios[method](`${endpoint}${params}`, body)
        .then(({ data }) => {
          dispatch(action(data));
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    [method, endpoint, action],
  );

  return { fetchData };
};
