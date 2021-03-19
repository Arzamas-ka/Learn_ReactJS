import React, { FC, useState, FormEvent } from 'react';

import {
  DeleteMovie as DeleteMovieWrapper,
  ButtonContainer,
  CloseIcon,
  DeleteMovieText,
  DeleteMovieTitle,
} from './style';

import Button from 'components/Button';

const DeleteMovie: FC = () => {

  return (
    <DeleteMovieWrapper>
      <CloseIcon />
      <DeleteMovieTitle>Delete Movie</DeleteMovieTitle>
      <DeleteMovieText>Are you sure you want to delete this movie?</DeleteMovieText>
      <ButtonContainer>
        <Button submit type="submit" onClick={null} text="Confirm" />
      </ButtonContainer>
    </DeleteMovieWrapper>
  );
};

export default DeleteMovie;
