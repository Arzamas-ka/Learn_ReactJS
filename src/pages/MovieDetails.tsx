import React, { memo, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ParamTypes } from './models';

import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';

import Catalog from '../components/Catalog';
import SearchHeader from '../components/Header/SearchHeader';
import { ModalsContext } from '../components/App/ModalsContext';

const MovieDetails = () => {
  const {
    toggleDelete,
    setIsActiveBackdrop,
    toggleEdit,
    setMovieDetails,
    setLoadingMovieDetails,
    setErrorMovieDetails,
  } = useContext(ModalsContext);
  const { id } = useParams<ParamTypes>();
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  } = useMoreDetailsMovie();

  useEffect(() => {
    fetchMovieDetails(id);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  return (
    <>
      <SearchHeader
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
      />
      <Catalog
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        hideEdit={toggleEdit}
        hideDelete={toggleDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
      />
    </>
  );
};

export default memo(MovieDetails);
