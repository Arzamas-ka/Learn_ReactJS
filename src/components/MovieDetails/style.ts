import styled from 'styled-components';
import { mediaQueries, colors } from '../../styles/consts';

export const StyledMovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 25px 55px 50px 55px;
  color: ${colors.white};
`;

export const StyledMovieDetailsImage = styled.img`
  width: 300px;
  height: 400px;
`;

export const StyledMovieDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px 55px;
`;

export const StyledMovieDetailsTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
`;

export const StyledMovieDetailsWin = styled.span`
  font-size: 15px;
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
  font-size: 14px;
`;
