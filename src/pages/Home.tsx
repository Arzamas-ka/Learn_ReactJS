import * as React from 'react';
import { useContext } from 'react';

import Catalog from 'components/Catalog';
import AddHeader from 'components/Header/AddHeader';
import { ModalsContext } from 'components/App/ModalsContext';

const Home = () => {
  const {
    toggleDelete,
    setIsActiveBackdrop,
    toggleEdit,
    toggleAdd,
    setMovieDetails,
    setLoadingMovieDetails,
    setErrorMovieDetails,
  } = useContext(ModalsContext);

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
