import React, { useContext, useEffect, useState } from 'react';
import Catalog from '../components/Catalog';
import SearchHeader from '../components/Header/SearchHeader';

import { ModalsContext } from '../components/App/ModalsContext';
import { useParams } from 'react-router-dom';
import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';

interface ParamTypes {
  id: string;
}

const MovieDetails = () => {
  const [, setMovieDetails]: any = useState(null);
  const [, setLoadingMovieDetails]: any = useState(true);
  const [, setErrorMovieDetails]: any = useState(false);

  const { id } = useParams<ParamTypes>();

  console.log('id: ', id);

  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  } = useMoreDetailsMovie();

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const { toggleDelete, setIsActiveBackdrop, toggleEdit } = useContext(
    ModalsContext,
  );

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

export default MovieDetails;
