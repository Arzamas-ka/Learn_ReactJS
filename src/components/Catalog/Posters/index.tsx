import * as React from 'react';
import { FC, useEffect, useCallback, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

import { PostersProps } from './models';
import { ParamTypes } from 'pages/models';
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
import { API_BASE, API_FILTER, API_PAGE, API_SEARCH } from '@constants';
import { fetchMovies, filterMovies } from 'actions/actions';
import { encodeURL } from 'helpers';

const Posters: FC<PostersProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const filterItem = useSelector(
    ({ movies: { filterItem } }: any) => filterItem,
  );
  const movies = useSelector(({ movies: { items } }: any) => items);
  const currentPage = useSelector(
    ({ movies: { currentPage } }: any) => currentPage,
  );
  const error = useSelector(({ movies: { error } }: any) => error);
  const loading = useSelector(({ movies: { loading } }: any) => loading);
  const totalPages = useSelector(
    ({ movies: { totalPages } }: any) => totalPages,
  );
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: getMoreMovies } = useApiRequest(
    'get',
    API_PAGE,
    fetchMovies,
  );
  const { slug } = useParams<ParamTypes>();
  const encode = encodeURL(slug);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    encode !== 'undefined'
      ? `${API_SEARCH}${encode}&searchBy=title`
      : `${API_FILTER}${filterItem}`,
    filterMovies,
  );

  useEffect(() => {
    getMovies();
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    if (filterItem !== 'all' || encode !== 'undefined') {
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
      {error && <StyledPostersError>{error}</StyledPostersError>}
      {loading && <Spinner />}
      {!error && !loading && (
        <>
          {' '}
          <StyledNumberMovies>
            <span>{movies.length}</span> movie found
          </StyledNumberMovies>
          <StyledPostersList>{posters}</StyledPostersList>
          {totalPages > 1 && (
            <Button
              load
              text="Load more posters"
              type="button"
              onClick={handleLoadMoreMovies}
            />
          )}
        </>
      )}
    </StyledPostersWrapper>
  );
};

export default memo(Posters);
