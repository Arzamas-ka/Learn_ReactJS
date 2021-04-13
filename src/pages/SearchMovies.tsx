import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ParamTypes } from './models';

import Catalog from 'components/Catalog';
import AddHeader from 'components/Header/AddHeader';
import { ModalsContext } from 'components/App/ModalsContext';

import { useApiRequest } from 'hooks/useApiRequest';
import { API_SEARCH } from '@constants';
import { filterMovies, fetchMovies } from 'actions/actions';

import { encodeURL } from 'helpers';

const SearchMovies = () => {
  const {
    toggleDelete,
    setIsActiveBackdrop,
    toggleEdit,
    toggleAdd,
    setMovieDetails,
    setLoadingMovieDetails,
    setErrorMovieDetails,
  } = useContext(ModalsContext);

  const { fetchData: getSearchMovies } = useApiRequest(
    'get',
    API_SEARCH,
    // filterMovies,
    fetchMovies,
  );

  const { slug } = useParams<ParamTypes>();
  const encode = encodeURL(slug);

  useEffect(() => {
    getSearchMovies(`${encode}&searchBy=title`);
  }, [slug]);

  return (
    <>
      <AddHeader
        hideAdd={toggleAdd}
        setIsActiveBackdrop={setIsActiveBackdrop}
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

export default SearchMovies;
