import styled from 'styled-components';

export const StyledPostersWrapper = styled.div`
  padding: 0 30px 30px 30px;
`;

export const StyledPostersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const StyledPostersItem = styled.li`
  margin: 0 15px;
`;

export const StyledPostersWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: grey;
`;

export const StyledPostersTitle = styled.h2`
  font-size: 22px;
`;

export const StyledPostersTitleYear = styled.span`
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const StyledPostersImg = styled.img`
  width: 320px;
  height: 455px;
`;

export const StyledPostersGenre = styled.p`
  padding-bottom: 15px;
  color: grey;
`;
