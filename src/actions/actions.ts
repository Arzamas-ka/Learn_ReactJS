import {
  FETCH_MOVIES,
  ERROR_MOVIES_TRUE,
  ERROR_MOVIES_FALSE,
  LOADING_MOVIES_TRUE,
  LOADING_MOVIES_FALSE,
} from '../actions/types';

export const moviesAction = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const moviesErrorTrueAction = () => {
  return { type: ERROR_MOVIES_TRUE };
};

export const moviesErrorFalseAction = () => {
  return { type: ERROR_MOVIES_FALSE };
};

export const moviesLoadingTrueAction = () => {
  return { type: LOADING_MOVIES_TRUE };
};

export const moviesLoadingFalseAction = () => {
  return { type: LOADING_MOVIES_FALSE };
};
