import styled from 'styled-components';
import { mediaQueries } from '../../styles/consts';

export const Search = styled.div`
  padding: 25px 55px 55px 55px;

  @media screen and (max-width: 510px) {
    padding: 25px 15px 55px 15px;
  }

  h2 {
    padding: 35px 0;
    margin: 0 60px;

    font-size: 30px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;

    ${mediaQueries('lg')`
      text-align: center;
    `}

    ${mediaQueries('xl')`
      margin: 0;

      font-size: 25px;
      text-align: center;
    `}

    ${mediaQueries('xxm')`
      margin: 0;

      font-size: 23px;
      text-align: center;
    `}
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${mediaQueries('xlg')`
      flex-direction: column;
      align-items: center;
  `}
`;
