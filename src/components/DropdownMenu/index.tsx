import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DropdownMenuProps } from './models';
import {
  StyledDropdownMenuContainer,
  StyledDropdownMenuMoreMenu,
  StyledDropdownMenuButton,
  StyledDropdownMenuItems,
  StyledDropdownMenuItem,
  StyledDropdownMenuSpan,
  StyledDropdownMenuDots,
} from './style';

import usePopup from 'hooks/usePopup';

import { deleteMovieIdAction } from 'actions/actions';

const DropdownMenu: FC<DropdownMenuProps> = ({
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
  posterId,
}) => {
  const dispatch = useDispatch();
  const { isShowing, toggle } = usePopup();

  const handleOnDelete = () => {
    hideDelete(),
      setIsActiveBackdrop(true),
      dispatch(deleteMovieIdAction(posterId));
  };

  return (
    <StyledDropdownMenuContainer>
      <>
        <StyledDropdownMenuDots onClick={toggle}>
          <StyledDropdownMenuSpan />
          <StyledDropdownMenuSpan />
          <StyledDropdownMenuSpan />
        </StyledDropdownMenuDots>
        {isShowing && (
          <StyledDropdownMenuMoreMenu>
            <StyledDropdownMenuItems>
              <StyledDropdownMenuItem>
                <StyledDropdownMenuButton
                  type="button"
                  onClick={() => (hideEdit(), setIsActiveBackdrop(true))}
                >
                  Edit
                </StyledDropdownMenuButton>
              </StyledDropdownMenuItem>
              <StyledDropdownMenuItem>
                <StyledDropdownMenuButton
                  type="button"
                  onClick={handleOnDelete}
                >
                  Delete
                </StyledDropdownMenuButton>
              </StyledDropdownMenuItem>
            </StyledDropdownMenuItems>
          </StyledDropdownMenuMoreMenu>
        )}
      </>
    </StyledDropdownMenuContainer>
  );
};

export default DropdownMenu;
