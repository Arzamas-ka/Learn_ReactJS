import {
  moviesAction,
  loadMoreMoviesAction,
  isLoadingMovies,
  isErrorMovies,
  deleteMovieAction,
  addMovieAction,
  addMovieUiAction,
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

export const deleteMovie = (id) => (dispatch) => {
  axios
    .delete(`${API_BASE}/${id}`)
    .then(({ data }) => {
      dispatch(deleteMovieAction({ data, id }));
    })
    .catch((error) => {
      dispatch(isErrorMovies());
    });
};

export const addMovie = (values) => (dispatch) => {
  const body = { ...values, runtime: parseInt(values.runtime) };

  axios
    .post(API_BASE, body)
    .then(dispatch(addMovieUiAction(body)))
    .catch((error) => {
      dispatch(isErrorMovies());
    });
};
