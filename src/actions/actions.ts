import {
  FETCH_MOVIES,
  ERROR_MOVIES_TRUE,
  ERROR_MOVIES_FALSE,
  LOADING_MOVIES_TRUE,
  LOADING_MOVIES_FALSE,
  FETCH_LOAD_MORE_MOVIES,
} from '../actions/types';

export const moviesAction = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const errorMoviesLoading = () => {
  return { type: ERROR_MOVIES_TRUE };
};

export const moviesErrorFalseAction = () => {
  return { type: ERROR_MOVIES_FALSE };
};

export const loadMovies = () => {
  return { type: LOADING_MOVIES_TRUE };
};

export const moviesLoadingFalseAction = () => {
  return { type: LOADING_MOVIES_FALSE };
};

export const loadMoreMoviesAction = (payload) => {
  return { type: FETCH_LOAD_MORE_MOVIES, payload };
};
