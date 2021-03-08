import React, { FC } from 'react';

import {
  Posters as PostersWrapper,
  PostersList,
  PostersItem,
  PostersWrapTitle,
  PostersTitle,
  PostersTitleYear,
  PostersImg,
  PostersGenre,
} from './style';

import PostersData from '../../../../data';

const Posters: FC = () => (
  <PostersWrapper>
    <PostersList>
      {PostersData.map((poster) => (
        <PostersItem key={poster.id}>
          <PostersImg src={poster.poster} alt={poster.title} />
          <PostersWrapTitle>
            <PostersTitle>{poster.title}</PostersTitle>
            <PostersTitleYear>{poster.year}</PostersTitleYear>
          </PostersWrapTitle>
          <PostersGenre>{poster.genre}</PostersGenre>
        </PostersItem>
      ))}
    </PostersList>
  </PostersWrapper>
);

export default Posters;
