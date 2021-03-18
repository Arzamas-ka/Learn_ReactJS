import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../@constants/index';

export const usePostersFetch = () => {
  const [movies, setMovies] = useState({ movies: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const response = await axios.get(endpoint);
      const posters = response.data;

      console.log('posters: ', posters);

      setMovies((prev) => ({
        ...prev,
        movies: [...posters.data],
        currentPage: posters.offset,
        totalPages: posters.totalAmount / posters.limit,
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(API_BASE);
  }, []);

  return { movies, error, loading, fetchMovies };
};
