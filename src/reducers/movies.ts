import {
  FETCH_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  POSTER_ID,
  DELETE_MOVIE,
  ADD_MOVIE_UI,
  EDIT_MOVIE_UI,
  FILTER_MOVIES,
  SORT_BY_MOVIES,
} from '../actions/types';

export const initialState = {
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
        currentPage: payload.offset + 1,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
        error: null,
        loading: false,
      };

    case FETCH_LOAD_MORE_MOVIES:
      return {
        ...state,
        items: [...state.items, ...payload.data],
        currentPage: payload.offset + 1,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
        error: null,
        loading: false,
      };

    case POSTER_ID:
      return {
        ...state,
        posterId: payload,
      };

    case ADD_MOVIE_UI:
      return {
        ...state,
        items: [{ id: state.posterId, ...payload }, ...state.items],
        loading: false,
      };

    case EDIT_MOVIE_UI:
      let updatedMovie = state.items.find((movie) => {
        return movie.id === payload.id;
      });

      Object.assign(updatedMovie, payload);

      return {
        items: [...state.items],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== state.posterId)],
        loading: false,
      };

    case FILTER_MOVIES:
      return {
        ...state,
        items: payload.data,
      };

    case SORT_BY_MOVIES:
      return {
        ...state,
        items: payload.data,
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
