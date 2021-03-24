import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
} from '../actions/types';

export const moviesAction = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const loadMoreMoviesAction = (payload) => {
  return { type: FETCH_LOAD_MORE_MOVIES, payload };
};

export const isLoadingMovies = () => {
  return { type: LOADING_MOVIES };
};

export const isErrorMovies = () => {
  return { type: ERROR_MOVIES };
};
