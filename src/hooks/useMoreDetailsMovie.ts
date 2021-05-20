import { useCallback, useContext } from 'react';

import axios from 'axios';

import { API_BASE } from '../@constants/index';

import { ModalsContext } from 'components/App/ModalsContext';

// PATTERN: custom hook
const useMoreDetailsMovie = () => {
  const {
    setErrorMovieDetails,
    setLoadingMovieDetails,
    setMovieDetails,
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
  } = useContext(ModalsContext);

  const fetchMovieDetails = useCallback(
    async (id) => {
      if (!id) {
        setErrorMovieDetails(true);
        setLoadingMovieDetails(false);
      }

      try {
        setLoadingMovieDetails(true);
        const response = await axios.get(`${API_BASE}/${id}`);
        const responseMovieDetails = response.data;

        setMovieDetails(responseMovieDetails);
      } catch (error) {
        setErrorMovieDetails(true);
      } finally {
        setLoadingMovieDetails(false);
      }
    },
    [movieDetails],
  );

  return {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  };
};

export default useMoreDetailsMovie;
