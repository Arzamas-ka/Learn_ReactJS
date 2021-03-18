import { useState, useEffect } from 'react';
// libs
import axios from 'axios';
// constants
import { API_BASE } from '../@constants/index';

const useMoreDetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);

  const fetchMovieDetails = async (id) => {
    setErrorMovieDetails(false);
    setLoadingMovieDetails(true);

    try {
      const response = await axios.get(`${API_BASE}/${id}`);
      const movieDetails = response.data;

      console.log('repDetails: ', movieDetails);
    } catch (error) {
      setErrorMovieDetails(true);
    }

    setLoadingMovieDetails(false);
  };

  return {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  };
};

export default useMoreDetailsMovie;
