import styled from 'styled-components';
import {
  mediaQueries,
  colors,
  rgbaMap,
  colorsRgba,
} from '../../../styles/consts';

export const StyledPostersWrapper = styled.div`
  padding: 0 30px 30px 30px;
`;

export const StyledNumberMovies = styled.h3`
  padding: 25px 70px;

  font-size: 18px;
  font-weight: 100;
  color: ${colors.white};

  ${mediaQueries('sizeXXL')`
    text-align: center;
  `}

  span {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const StyledPostersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 70px;
`;

export const StyledPostersItem = styled.li`
  margin: 15px;
  padding: 15px;
  height: 620px;

  box-shadow: 0 4px 8px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  }
`;

export const StyledPostersLink = styled.a`
  cursor: pointer;
`;

export const StyledPostersWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 300px;
  padding: 10px 0;

  color: ${colors.grey};
`;

export const StyledPostersTitle = styled.h2`
  font-size: 20px;
`;

export const StyledPostersTitleYear = styled.span`
  align-self: center;

  padding: 5px;

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

  color: ${colors.grey};
`;

export const StyledPostersError = styled.div`
  margin: 150px;

  color: ${colors.white};
  font-weight: 200;
  font-size: 32px;
  text-align: center;
`;
