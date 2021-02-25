import styled from 'styled-components';

export const Catalog = styled.div`
  /* color: green; */
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
