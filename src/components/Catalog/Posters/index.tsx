import React, { FC, useCallback, useEffect } from 'react';
import shortid from 'shortid';
// types and styles
import { PostersProps } from './models';
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledPostersItem,
  StyledPostersWrapTitle,
  StyledPostersTitle,
  StyledPostersTitleYear,
  StyledPostersImg,
  StyledPostersGenre,
  StyledPostersLink,
  StyledNumberMovies,
  StyledPostersError,
} from './style';
// hooks
import usePostersFetch from 'hooks/usePostersFetch';
import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';
// images
import defaultImgMovie from '../../../assets/images/fallback_movie.png';
// constants
import { API_PAGE } from '@constants';
// components
import Button from 'components/Button';
import { Spinner } from 'components/Spinner';

const Posters: FC<PostersProps> = ({ setMovieDetails }: any) => {
  const { movies, error, loading, fetchMovies }: any = usePostersFetch();
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  }: any = useMoreDetailsMovie();

  const loadMorePosters = () => {
    const loadMorePostersEndpoint = `${API_PAGE}${movies.currentPage + 1}`;

    fetchMovies(loadMorePostersEndpoint);
  };

  const handleMoreDetails = (id) => {
    fetchMovieDetails(id);
  };

  useEffect(() => {
    setMovieDetails(movieDetails);
  }, [movieDetails]);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  const posters = movies.movies.map((poster) => {
    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <StyledPostersItem key={shortid.generate()}>
        <StyledPostersLink onClick={() => handleMoreDetails(poster.id)}>
          <StyledPostersImg
            src={poster.poster_path}
            alt={poster.title}
            onError={addDefaultSrc}
          />
          <StyledPostersWrapTitle>
            <StyledPostersTitle>{poster.title}</StyledPostersTitle>
            <StyledPostersTitleYear>
              {poster.release_date}
            </StyledPostersTitleYear>
          </StyledPostersWrapTitle>
          <StyledPostersGenre>{genre}</StyledPostersGenre>
        </StyledPostersLink>
      </StyledPostersItem>
    );
  });

  return (
    <StyledPostersWrapper>
      {error && <StyledPostersError>No Movie Found</StyledPostersError>}
      {loading && <Spinner />}
      <>
        {' '}
        <StyledNumberMovies>
          <span>{movies.movies.length}</span> movie found
        </StyledNumberMovies>
        <StyledPostersList>{posters}</StyledPostersList>
      </>
      <Button
        load
        text="Load more posters"
        type="button"
        onClick={loadMorePosters}
      />
    </StyledPostersWrapper>
  );
};

export default Posters;
