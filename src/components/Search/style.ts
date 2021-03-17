import styled from 'styled-components';
import { mediaQueries, colors } from '../../styles/consts';

export const StyledSearchWrapper = styled.div`
  padding: 0 55px 155px 55px;

  ${mediaQueries('sizeL')`
    padding: 25px 15px 55px 15px;
  `}
`;

export const StyledInputSearchContainer = styled.div`
  display: flex;
  justify-content: center;

  ${mediaQueries('sizeXXXL')`
      flex-direction: column;
      align-items: center;
  `}
`;

export const StyledSearchTitle = styled.h2`
  padding: 35px 0;
  margin: 0 60px;

  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;

  ${mediaQueries('sizeXXL')`
      text-align: center;
    `}

  ${mediaQueries('sizeL')`
      margin: 0;

      font-size: 25px;
      text-align: center;
    `}

    ${mediaQueries('sizeS')`
      margin: 0;

      font-size: 23px;
      text-align: center;
    `}
`;
