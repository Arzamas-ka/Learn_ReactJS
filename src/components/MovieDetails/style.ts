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

  ${mediaQueries('sizeXXL')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const StyledMovieDetailsImage = styled.img`
  width: 300px;
  height: 350px;

  ${mediaQueries('sizeXXL')`
     width: 250px;
  `}
`;

export const StyledMovieDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px 55px;

  ${mediaQueries('sizeXXL')`
    align-items: center;
  `}
`;

export const StyledMovieDetailsTitle = styled.h3`
  margin-right: 20px;

  font-size: 35px;
  font-weight: 100;
`;

export const StyledMovieDetailsWin = styled.span`
  padding: 5px;

  font-size: 15px;
  font-weight: 100;
`;

export const StyledMovieDetailsDate = styled.div`
  display: flex;
  justify-content: end;

  padding: 5px;
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
  height: 50px;
  padding: 13px 10px 10px 10px;

  font-size: 20px;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  color: green;
`;

export const StyledMovieDetailsTitleContainer = styled.div`
  display: flex;
  justify-content: end;
`;
