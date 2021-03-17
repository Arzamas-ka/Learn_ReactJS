import React, { FC } from 'react';

// types and styles
import {
  StyledPostersWrapper,
  StyledPostersList,
  StyledPostersItem,
  StyledPostersWrapTitle,
  StyledPostersTitle,
  StyledPostersTitleYear,
  StyledPostersImg,
  StyledPostersGenre,
} from './style';

import PostersData from '../../../../data';

const Posters: FC = () => (
  <StyledPostersWrapper>
    <StyledPostersList>
      {PostersData.map((poster) => (
        <StyledPostersItem key={poster.id}>
          <StyledPostersImg src={poster.poster} alt={poster.title} />
          <StyledPostersWrapTitle>
            <StyledPostersTitle>{poster.title}</StyledPostersTitle>
            <StyledPostersTitleYear>{poster.year}</StyledPostersTitleYear>
          </StyledPostersWrapTitle>
          <StyledPostersGenre>{poster.genre}</StyledPostersGenre>
        </StyledPostersItem>
      ))}
    </StyledPostersList>
  </StyledPostersWrapper>
);

export default Posters;
