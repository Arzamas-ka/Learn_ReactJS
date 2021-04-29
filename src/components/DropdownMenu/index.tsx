import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

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

import usePopupToggle from 'hooks/usePopupToggle';
import { putPosterId } from 'actions/actions';

const DropdownMenu: FC<DropdownMenuProps> = ({
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
  posterId,
}) => {
  const dispatch = useDispatch();
  const { isShowing, toggle } = usePopupToggle();

  const handleOnDelete = useCallback(() => {
    hideDelete();
    setIsActiveBackdrop(true);
    dispatch(putPosterId(posterId));
  }, []);

  const handleOnEdit = useCallback(() => {
    hideEdit();
    setIsActiveBackdrop(true);
    dispatch(putPosterId(posterId));
  }, []);

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
                <StyledDropdownMenuButton type="button" onClick={handleOnEdit}>
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
