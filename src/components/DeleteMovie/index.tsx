import React, { FC } from 'react';

// types and styled
import {
  StyledDeleteMovieWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledDeleteMovieText,
  StyledDeleteMovieTitle,
} from './style';

// components
import Button from 'components/Button';

const DeleteMovie: FC = () => {
  return (
    <StyledDeleteMovieWrapper>
      <StyledCloseIcon />
      <StyledDeleteMovieTitle>Delete Movie</StyledDeleteMovieTitle>
      <StyledDeleteMovieText>
        Are you sure you want to delete this movie?
      </StyledDeleteMovieText>
      <StyledButtonContainer>
        <Button submit type="submit" onClick={null} text="Confirm" />
      </StyledButtonContainer>
    </StyledDeleteMovieWrapper>
  );
};

export default DeleteMovie;
