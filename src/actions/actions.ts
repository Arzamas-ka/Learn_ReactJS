import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  DELETE_MOVIE_ON_UI,
  DELETE_MOVIE_ID,
  ADD_MOVIE,
  ADD_MOVIE_ON_UI,
  EDIT_MOVIE,
  EDIT_MOVIE_ON_UI,
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

export const deleteMovieAction = (payload) => {
  return { type: DELETE_MOVIE_ON_UI, payload };
};

export const deleteMovieIdAction = (payload) => {
  return { type: DELETE_MOVIE_ID, payload };
};

export const addMovieAction = (payload) => {
  return { type: ADD_MOVIE, payload };
};

export const addMovieUiAction = (payload) => {
  return { type: ADD_MOVIE_ON_UI, payload };
};

export const editMovie = (payload) => {
  return { type: EDIT_MOVIE, payload };
};

export const editMovieUiAction = (payload) => {
  return { type: EDIT_MOVIE_ON_UI, payload };
};
