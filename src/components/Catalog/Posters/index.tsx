import React, { FC, useState, useEffect } from 'react';

import { Posters as PostersWrapper } from './style';

import PostersData from '../../../../data';

const Posters: FC = () => (
  <PostersWrapper>
    <ul>
      {PostersData.map((poster) => (
        <li key={poster.id}>
          <img src={poster.poster} alt={poster.title} />
          <div>
            <h3>{poster.title}</h3>
            <span>{poster.year}</span>
          </div>
          <p>{poster.genre}</p>
        </li>
      ))}
    </ul>
  </PostersWrapper>
);

export default Posters;
