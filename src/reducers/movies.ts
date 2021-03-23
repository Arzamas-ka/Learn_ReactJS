import {
  FETCH_MOVIES,
  ERROR_MOVIES_TRUE,
  ERROR_MOVIES_FALSE,
  LOADING_MOVIES_TRUE,
  LOADING_MOVIES_FALSE,
} from '../actions/types';

const initialState = {
  items: [],
  currentPage: '',
  totalPages: '',
  error: false,
  loading: false,
};

export const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: payload.data,
        currentPage: payload.offset,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
      };

    case ERROR_MOVIES_TRUE:
      return {
        ...state,
        error: true,
      };
    case ERROR_MOVIES_FALSE:
      return {
        ...state,
        error: false,
      };

    case LOADING_MOVIES_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_MOVIES_FALSE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
