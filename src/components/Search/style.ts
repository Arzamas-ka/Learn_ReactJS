import styled from 'styled-components';
import { mediaQueries, colors } from '../../styles/consts';

export const Search = styled.div`
  padding: 25px 55px 55px 55px;

  ${mediaQueries('sizeL')`
    padding: 25px 15px 55px 15px;
  `}

  h2 {
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
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${mediaQueries('sizeXXXL')`
      flex-direction: column;
      align-items: center;
  `}
`;
