import styled from 'styled-components';
import { mediaQueries, colors, rgbaMap, colorsRgba } from '../../styles/consts';

export const StyledMovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px;
  padding: 20px 55px;
  color: ${colors.white};
  border-radius: 10px;
  background-color: ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)};
`;

export const StyledMovieDetailsImage = styled.img`
  width: 300px;
  height: 350px;
`;

export const StyledMovieDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px 55px;
`;

export const StyledMovieDetailsTitle = styled.h3`
  margin-right: 20px;

  font-size: 35px;
  font-weight: 100;
`;

export const StyledMovieDetailsWin = styled.span`
  font-size: 15px;
  font-weight: 100;
`;

export const StyledMovieDetailsDate = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledMovieDetailsYear = styled.span`
  margin-right: 20px;

  font-size: 18px;
  color: ${colors.coral};
`;

export const StyledMovieDetailsTime = styled.span`
  font-size: 18px;
  color: ${colors.coral};
`;

export const StyledMovieDetailsArticle = styled.p`
  font-size: 16px;
  font-weight: 100;
  line-height: 1.7;
`;

export const StyledMovieDetailsAverage = styled.span`
  width: 50px;
  padding: 10px;

  font-size: 20px;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  color: green;
`;

export const StyledMovieDetailsTitleContainer = styled.div`
  display: flex;
  justify-content: end;
`;
