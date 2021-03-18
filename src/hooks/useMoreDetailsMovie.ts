import { useState, useCallback } from 'react';
// libs
import axios from 'axios';
// constants
import { API_BASE } from '../@constants/index';

const useMoreDetailsMovie = () => {
  const [movieDetails, setMovieDetails]: any = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);

  const fetchMovieDetails = useCallback(
    async (id) => {
      setErrorMovieDetails(false);
      setLoadingMovieDetails(true);

      try {
        const response = await axios.get(`${API_BASE}/${id}`);
        const responseMovieDetails = response.data;

        setMovieDetails(responseMovieDetails);
      } catch (error) {
        setErrorMovieDetails(true);
      }

      setLoadingMovieDetails(false);
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