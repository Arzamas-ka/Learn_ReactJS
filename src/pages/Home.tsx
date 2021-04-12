import React, { useContext, useState } from 'react';
import Catalog from 'components/Catalog';
import { ModalsContext } from 'components/App/ModalsContext';
import AddHeader from 'components/Header/AddHeader';

const Home = () => {
  const {
    toggleDelete,
    setIsActiveBackdrop,
    toggleEdit,
    toggleAdd,
  } = useContext(ModalsContext);

  const [movieDetails, setMovieDetails]: any = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails]: any = useState(true);
  const [errorMovieDetails, setErrorMovieDetails]: any = useState(false);

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

export default Home;
