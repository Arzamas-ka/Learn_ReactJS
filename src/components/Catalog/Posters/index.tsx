import React, { FC, useEffect, useCallback, memo } from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';

import { PostersProps } from './models';
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledNumberMovies,
  StyledPostersError,
} from './style';

import Button from 'components/Button';
import { Spinner } from 'components/Spinner';
import PosterItem from './PosterItem';

import { useApiRequest } from 'hooks/useApiRequest';
import { API_BASE, API_FILTER, API_PAGE } from '@constants';
import { fetchMovies, filterMovies } from 'actions/actions';

const Posters: FC<PostersProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const filterItem = useSelector(({ movies: { filterItem } }) => filterItem);
  const movies = useSelector(({ movies: { items } }) => items);
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: getMoreMovies } = useApiRequest(
    'get',
    API_PAGE,
    fetchMovies,
  );
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}${filterItem}`,
    filterMovies,
  );

  useEffect(() => {
    getMovies();
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    if (filterItem !== 'all') {
      filteredMovies(`&offset=${currentPage}`);
    } else {
      getMoreMovies(currentPage);
    }
  }, [currentPage, filterItem]);

  const posters = movies.map((poster) => {
    if (!poster.genres) poster.genres = [];

    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <PosterItem
        key={shortid.generate()}
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        poster={poster}
        genre={genre}
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
      />
    );
  });

  return (
    <StyledPostersWrapper>
      {error && <StyledPostersError>No Movie Found</StyledPostersError>}
      {loading && <Spinner />}
      {!error && !loading && (
        <>
          {' '}
          <StyledNumberMovies>
            <span>{movies.length}</span> movie found
          </StyledNumberMovies>
          <StyledPostersList>{posters}</StyledPostersList>
          <Button
            load
            text="Load more posters"
            type="button"
            onClick={handleLoadMoreMovies}
          />
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
