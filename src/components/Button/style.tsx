import styled from 'styled-components';

export const Button = styled.button`
  &.btn-add {
    width: 150px;
    padding: 10px 15px;

    font-size: 16px;
    color: #f65261;
    border-radius: 4px;
    background-color: rgba(85, 85, 85, 0.9);
    text-transform: uppercase;
  }

  /* &.btn-search {
    width: 150px;
    padding: 10px 15px;

    font-size: 16px;
    color: blue;
    border-radius: 4px;
    background-color: rgba(85, 85, 85, 0.9);
    text-transform: uppercase;
  } */

  :hover {
    color: white;
  }
`;
