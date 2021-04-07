import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  DELETE_MOVIE,
  POSTER_ID,
  ADD_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  SORT_BY_MOVIES
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

export const addMovie= (payload) => {
  return { type: ADD_MOVIE, payload };
};

export const editMovie = (payload) => {
  return { type: EDIT_MOVIE, payload };
};

export const filterMovies = (payload) => {
  return { type: FILTER_MOVIES, payload };
};

export const sortByMovies = (payload) => {
  return { type: SORT_BY_MOVIES, payload };
};
