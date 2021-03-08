import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/consts';

export const Catalog = styled.div`
  color: #424242;
`;

export const FilterSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 65px;
  border-bottom: 2px solid #555555;

  ${css`
    @media screen and ${breakpoints.lg} {
      flex-direction: column;
      align-items: center;

      border-bottom: none;
    }
  `}
`;

export const NumberMovies = styled.h3`
  padding: 25px 70px;

  font-size: 18px;
  font-weight: 100;
  color: white;

  ${css`
    @media screen and ${breakpoints.lg} {
      text-align: center;
    }
  `}

  span {
    font-size: 22px;
    font-weight: 600;
  }
`;
