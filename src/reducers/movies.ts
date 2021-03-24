import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
} from '../actions/types';

const initialState = {
  items: [],
  currentPage: 0,
  totalPages: 0,
  error: null,
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
        error: null,
        loading: false,
      };

    case FETCH_LOAD_MORE_MOVIES:
      return {
        ...state,
        items: [...state.items, ...payload.data],
        currentPage: payload.offset,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
        error: null,
        loading: false,
      };

    case ERROR_MOVIES:
      return {
        ...state,
        error: true,
      };

    case LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
