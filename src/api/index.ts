import {
  moviesAction,
  moviesErrorTrueAction,
  moviesErrorFalseAction,
  moviesLoadingTrueAction,
  moviesLoadingFalseAction,
} from 'actions/actions';
import axios from 'axios';

import { API_BASE } from '../@constants/index';

export const getMovies = () => (dispatch) => {
  dispatch(moviesErrorFalseAction());
  dispatch(moviesLoadingTrueAction());

  axios
    .get(API_BASE)
    .then(({ data }) => {
      dispatch(moviesAction(data));
    })
    .catch((error) => {
      dispatch(moviesErrorTrueAction());
    })
    .finally(() => {
      dispatch(moviesLoadingFalseAction());
    });
};
