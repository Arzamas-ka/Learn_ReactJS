import { useState, useCallback } from 'react';

import axios from 'axios';

import { API_BASE } from '../@constants/index';

const useMoreDetailsMovie = () => {
  const [movieDetails, setMovieDetails]: any = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);

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
