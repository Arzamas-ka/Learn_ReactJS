import * as React from 'react';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { DeleteMoviePopupProps } from './models';
import {
  StyledDeleteMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledDeleteMoviePopupText,
  StyledDeleteMoviePopupTitle,
} from './style';

import Button from 'components/Button';

import { API_DELETE } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { deleteMovie } from 'actions/actions';

const DeleteMoviePopup: FC<DeleteMoviePopupProps> = ({
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const posterId = useSelector(({ movies: { posterId } }) => posterId);
  const { fetchData: deleteMovieFetch } = useApiRequest(
    'delete',
    API_DELETE,
    deleteMovie,
  );

  const handleConfirm = useCallback(() => {
    deleteMovieFetch(posterId);
    hideDelete();
    setIsActiveBackdrop(false);
  }, []);

  return (
    <StyledDeleteMoviePopupWrapper>
      <StyledCloseIcon
        onClick={() => {
          hideDelete();
          setIsActiveBackdrop(false);
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
