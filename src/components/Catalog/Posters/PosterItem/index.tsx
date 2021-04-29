import * as React from 'react';
import { FC, memo, useCallback } from 'react';
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

import defaultImgMovie from '../../../../assets/images/fallback_movie.png';

import DropdownMenu from 'components/DropdownMenu';

const PosterItem: FC<PosterItemProps> = ({
  genre,
  poster,
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}: any) => {
  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  return (
    <StyledPostersItem key={poster.id}>
      <DropdownMenu
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        setIsActiveBackdrop={setIsActiveBackdrop}
        posterId={poster.id}
      />
      <StyledPostersLink to={`/film/${poster.id}`}>
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

export default memo(PosterItem);
