import {
  moviesAction,
  loadMoreMoviesAction,
  moviesErrorTrueAction,
  moviesErrorFalseAction,
  moviesLoadingTrueAction,
  moviesLoadingFalseAction,
} from 'actions/actions';
import axios from 'axios';

import { API_BASE, API_PAGE } from '../@constants/index';

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

export const getMoreMovies = (currentPage) => (dispatch) => {
  dispatch(moviesErrorFalseAction());
  dispatch(moviesLoadingTrueAction());

  axios
    .get(`${API_PAGE}${currentPage + 1}`)
    .then(({ data }) => {
      dispatch(loadMoreMoviesAction(data));
    })
    .catch((error) => {
      dispatch(moviesErrorTrueAction());
    })
    .finally(() => {
      dispatch(moviesLoadingFalseAction());
    });
};
