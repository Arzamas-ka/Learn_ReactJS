import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { getErrorMessage } from './../actions/actions';

export const useApiRequest = (method, endpoint, action) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (params = '', body = {}) => {
      console.log('URL: ', `${endpoint}${params}`);

      axios[method](`${endpoint}${params}`, body)
        .then(({ data }) => {
          dispatch(action(data));
        })
        .catch((error) => {
          dispatch(getErrorMessage(error.response.data));
        });
    },
    [method, endpoint, action],
  );

  return { fetchData };
};
