import {
  FETCH_MOVIES,
  POSTER_ID,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  FILTER_ITEM,
} from '../actions/types';

export const initialState = {
  items: [],
  currentPage: 0,
  totalPages: 0,
  error: null,
  loading: true,
  posterId: null,
  filterItem: 'all',
};

export const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: [...state.items, ...payload.data],
        currentPage: payload.offset + 1,
        totalPages: Math.floor(
          payload.totalAmount / payload.limit - payload.offset,
        ),
        loading: false,
      };

    case POSTER_ID:
      return {
        ...state,
        posterId: payload,
      };

    case ADD_MOVIE:
      return {
        ...state,
        items: [{ id: state.posterId, ...payload }, ...state.items],
        loading: false,
      };

    case EDIT_MOVIE:
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
        items: [...state.items, ...payload.data],
        currentPage: payload.offset + 1,
        totalPages: Math.floor(
          payload.totalAmount / payload.limit - payload.offset,
        ),
        error: null,
        loading: false,
      };

    case FILTER_ITEM:
      return {
        ...state,
        currentPage: 0,
        filterItem: payload,
        items: [],
        loading: true,
      };

    default:
      return state;
  }
};
