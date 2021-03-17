import React, { FC } from 'react';

// types and styled
import {
  StyledDeleteMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledDeleteMoviePopupText,
  StyledDeleteMoviePopupTitle,
} from './style';

// components
import Button from 'components/Button';

const DeleteMoviePopup: FC = () => {
  return (
    <StyledDeleteMoviePopupWrapper>
      <StyledCloseIcon />
      <StyledDeleteMoviePopupTitle>Delete Movie</StyledDeleteMoviePopupTitle>
      <StyledDeleteMoviePopupText>
        Are you sure you want to delete this movie?
      </StyledDeleteMoviePopupText>
      <StyledButtonContainer>
        <Button submit type="submit" onClick={null} text="Confirm" />
      </StyledButtonContainer>
    </StyledDeleteMoviePopupWrapper>
  );
};

export default DeleteMoviePopup;
