import styled from 'styled-components';
import { mediaQueries } from '../../../styles/consts';

export const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  color: white;
  text-transform: uppercase;

  ${mediaQueries("sizeM")`
    flex-direction: column;
    align-items: center;
  `}
`;

export const FilterItem = styled.li`
  position: relative;

  margin: 25px 15px;
  cursor: pointer;

  &.active-link {
    display: inline-block;
    text-decoration: none;
  }

  &.active-link::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 25px;

    background: #f65261;
    transition: width 0.3s;
  }

  &.active-link:hover::after {
    width: 100%;
  }

  &:hover {
    color: #f65261;
  }

  &:active {
    color: #555555;
  }
`;
