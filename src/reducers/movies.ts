import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  DELETE_MOVIE_ID,
  DELETE_MOVIE_ON_UI,
} from '../actions/types';

const initialState = {
  items: [],
  currentPage: 0,
  totalPages: 0,
  error: null,
  loading: false,
  deleteId: null,
};

export const movies = (state = initialState, { type, payload }) => {
  console.log('payload: ', payload);

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

    case DELETE_MOVIE_ID:
      return {
        ...state,
        deleteId: payload,
      };

    case DELETE_MOVIE_ON_UI:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== payload.id),
          ...payload.data,
        ],
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
