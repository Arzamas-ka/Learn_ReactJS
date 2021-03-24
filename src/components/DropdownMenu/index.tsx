import React from 'react';

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

const DropdownMenu = () => {
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
                <StyledDropdownMenuButton type="button">
                  Edit
                </StyledDropdownMenuButton>
              </StyledDropdownMenuItem>
              <StyledDropdownMenuItem>
                <StyledDropdownMenuButton type="button">
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
