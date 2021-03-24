import React, { FC } from 'react';

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

const DropdownMenu: FC<DropdownMenuProps> = ({
  hideEdit,
  hideDelete,
  setIsActiveBackdrop,
}) => {
  const { isShowing, toggle } = usePopup();

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
                  onClick={() => (hideDelete(), setIsActiveBackdrop(true))}
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
