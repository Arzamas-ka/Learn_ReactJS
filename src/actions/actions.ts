import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  DELETE_MOVIE,
  POSTER_ID,
  ADD_MOVIE_UI,
  EDIT_MOVIE,
  EDIT_MOVIE_UI,
} from '../actions/types';

export const fetchMovies = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const loadMoreMovies = (payload) => {
  return { type: FETCH_LOAD_MORE_MOVIES, payload };
};

export const isLoadingMovies = () => {
  return { type: LOADING_MOVIES };
};

export const errorMovies = () => {
  return { type: ERROR_MOVIES };
};

export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload };
};

export const deleteMovieId = (payload) => {
  return { type: POSTER_ID, payload };
};

export const addMovieUI= (payload) => {
  return { type: ADD_MOVIE_UI, payload };
};

export const editMovie = (payload) => {
  return { type: EDIT_MOVIE, payload };
};

export const editMovieUI = (payload) => {
  return { type: EDIT_MOVIE_UI, payload };
};
