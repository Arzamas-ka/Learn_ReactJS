import React, { FC, useCallback, useEffect } from 'react';
import shortid from 'shortid';

import { PosterItemProps } from './models';
import {
  StyledPostersItem,
  StyledPostersWrapTitle,
  StyledPostersTitle,
  StyledPostersTitleYear,
  StyledPostersImg,
  StyledPostersGenre,
  StyledPostersLink,
} from './style';

import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';

import defaultImgMovie from '../../../../assets/images/fallback_movie.png';

import DropdownMenu from 'components/DropdownMenu';

const PosterItem: FC<PosterItemProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  genre,
  poster,
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}: any) => {
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  } = useMoreDetailsMovie();

  const handleMoreDetails = useCallback((id) => {
    fetchMovieDetails(id);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    setLoadingMovieDetails(loadingMovieDetails);
    setErrorMovieDetails(errorMovieDetails);
    setMovieDetails(movieDetails);
  }, [movieDetails, loadingMovieDetails, errorMovieDetails]);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  return (
    <StyledPostersItem key={shortid.generate()}>
      <DropdownMenu
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
        posterId={poster.id}
      />
      <StyledPostersLink onClick={() => handleMoreDetails(poster.id)}>
        <StyledPostersImg
          src={poster.poster_path}
          alt={poster.title}
          onError={addDefaultSrc}
        />
        <StyledPostersWrapTitle>
          <StyledPostersTitle>{poster.title}</StyledPostersTitle>
          <StyledPostersTitleYear>{poster.release_date}</StyledPostersTitleYear>
        </StyledPostersWrapTitle>
        <StyledPostersGenre>{genre}</StyledPostersGenre>
      </StyledPostersLink>
    </StyledPostersItem>
  );
};

export default PosterItem;
