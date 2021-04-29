import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, rgbaMap, colorsRgba } from '../../../../styles/consts';

export const StyledPostersItem = styled.li`
  position: relative;
  margin: 15px;
  padding: 15px;
  height: 620px;

  box-shadow: 0 4px 8px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  }
`;

export const StyledPostersLink = styled(Link)`
  cursor: pointer;
`;

export const StyledPostersWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 300px;
  padding: 10px 0;

  color: ${colors.grey_native};
`;

export const StyledPostersTitle = styled.h2`
  font-size: 20px;
`;

export const StyledPostersTitleYear = styled.span`
  width: 74px;
  height: 25px;
  padding: 5px;
  text-align: center;

  font-size: 12px;
  white-space: nowrap;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const StyledPostersImg = styled.img`
  width: 300px;
  height: 455px;
`;

export const StyledPostersGenre = styled.p`
  padding-bottom: 15px;
  width: 300px;

  color: ${colors.grey_native};
`;
