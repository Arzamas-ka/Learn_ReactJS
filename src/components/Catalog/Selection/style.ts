import styled from 'styled-components';
import { mediaQueries, colors } from '../../../styles/consts';

export const Sort = styled.div`
  ul {
    display: flex;
    justify-content: space-between;

    font-size: 16px;
    color: ${colors.white};
    text-transform: uppercase;

    ${mediaQueries('sizeM')`
      flex-direction: column;
      align-items: center;
  `}
  }

  li {
    position: relative;

    margin: 25px 15px;
    cursor: pointer;

    &.active-link {
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
      color: ${colors.grey_coral};
    }

    &:active {
      color: ${colors.grey_light};
    }
  }
`;
