import styled from 'styled-components';
import { mediaQueries, colors } from '../../../styles/consts';

export const StyledFilterList = styled.ul`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  color: ${colors.white};
  text-transform: uppercase;

  ${mediaQueries('sizeM')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const StyledFilterItem = styled.li`
  position: relative;

  display: inline-block;
  margin: 25px 15px;

  text-decoration: none;
  cursor: pointer;

  ::after {
    position: absolute;
    content: '';

    display: block;
    width: 0;
    height: 2px;
    margin-top: 25px;

    background: ${colors.coral};
    transition: width 0.3s;
  }

  :hover {
    color: ${colors.coral};
  }

  :active {
    color: ${colors.grey_light};
  }
`;
