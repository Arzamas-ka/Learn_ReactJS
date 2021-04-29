import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const StyledDropdownMenuContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export const StyledDropdownMenuMoreMenu = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;

  width: 220px;
  padding: 10px;
  margin-top: 10px;

  background-color: ${colors.grey_dark};
  border-radius: 5px;
  transform: translate(0, 15px) scale(0.95);
`;

export const StyledDropdownMenuButton = styled.button`
  width: 100%;
  padding: 15px;

  font-size: 18px;
  color: ${colors.white};
  background: none;
  text-align: left;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${colors.coral};
  }
`;

export const StyledDropdownMenuSpan = styled.span`
  display: inline-block;
  margin: 0 auto;
  width: 7px;
  height: 7px;
  margin-right: 3px;

  background-color: ${colors.grey_light};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const StyledDropdownMenuItems = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StyledDropdownMenuItem = styled.li`
  display: block;
`;

export const StyledDropdownMenuDots = styled.button`
  width: 100%;
  padding: 15px;

  text-align: left;
  font-size: 18px;
  color: ${colors.white};
  background: none;
  outline: none;
  cursor: pointer;

  :hover ${StyledDropdownMenuSpan} {
    background-color: ${colors.coral};
  }
`;
