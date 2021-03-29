import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  POSTER_ID,
  DELETE_MOVIE_ON_UI,
  ADD_MOVIE_ON_UI,
  EDIT_MOVIE_ON_UI,
} from '../actions/types';

const initialState = {
  items: [],
  currentPage: 0,
  totalPages: 0,
  error: null,
  loading: false,
  posterId: null,
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

    case POSTER_ID:
      return {
        ...state,
        posterId: payload,
      };

    case ADD_MOVIE_ON_UI:
      return {
        ...state,
        items: [payload, ...state.items],
      };

    case EDIT_MOVIE_ON_UI:
      let updatedMovie = state.items.find(movie => {
        return movie.id === payload.id;
      });

      Object.assign(updatedMovie, payload);

      return {
        items: [...state.items],
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
