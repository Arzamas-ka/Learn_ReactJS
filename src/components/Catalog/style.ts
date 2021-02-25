import styled from 'styled-components';

export const Catalog = styled.div`
  color: #424242;
`;

export const FilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 65px;
  border-bottom: 2px solid #555555;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;

    border-bottom: none;
  }
`;

export const NumberMovies = styled.h3`
  padding: 25px 70px;

  font-size: 18px;
  font-weight: 100;
  color: white;

  @media screen and (max-width: 880px) {
    text-align: center;
  }

  span {
    font-size: 22px;
    font-weight: 600;
  }
`;
