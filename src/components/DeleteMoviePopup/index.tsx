import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteMoviePopupProps } from './models';
import {
  StyledDeleteMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledDeleteMoviePopupText,
  StyledDeleteMoviePopupTitle,
} from './style';

import { deleteMovie } from 'api';

import Button from 'components/Button';

const DeleteMoviePopup: FC<DeleteMoviePopupProps> = ({
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const dispatch = useDispatch();
  const deleteId = useSelector(({ movies: { deleteId } }) => deleteId);

  console.log('ID: ', deleteId);

  const handleConfirm = () => {
    deleteMovie(deleteId)(dispatch);
    hideDelete();
    setIsActiveBackdrop(false);
  };

  return (
    <StyledDeleteMoviePopupWrapper>
      <StyledCloseIcon
        onClick={() => {
          hideDelete(), setIsActiveBackdrop(false);
        }}
      />
      <StyledDeleteMoviePopupTitle>Delete Movie</StyledDeleteMoviePopupTitle>
      <StyledDeleteMoviePopupText>
        Are you sure you want to delete this movie?
      </StyledDeleteMoviePopupText>
      <StyledButtonContainer>
        <Button submit type="submit" text="Confirm" onClick={handleConfirm} />
      </StyledButtonContainer>
    </StyledDeleteMoviePopupWrapper>
  );
};

export default DeleteMoviePopup;
