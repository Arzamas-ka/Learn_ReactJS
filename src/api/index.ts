import {
  moviesAction,
  loadMoreMoviesAction,
  isLoadingMovies,
  isErrorMovies,
} from 'actions/actions';
import axios from 'axios';

import { API_BASE, API_PAGE } from '../@constants/index';

export const getMovies = () => (dispatch) => {
  dispatch(isLoadingMovies());

  axios
    .get(API_BASE)
    .then(({ data }) => {
      dispatch(moviesAction(data));
    })
    .catch((error) => {
      dispatch(isErrorMovies());
    });
};

export const getMoreMovies = (currentPage) => (dispatch) => {
  dispatch(isLoadingMovies());

  axios
    .get(`${API_PAGE}${currentPage + 1}`)
    .then(({ data }) => {
      dispatch(loadMoreMoviesAction(data));
    })
    .catch((error) => {
      dispatch(isErrorMovies());
    });
};
