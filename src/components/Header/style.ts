import styled from 'styled-components';
import { mediaQueries } from '../../styles/consts';

import bgrImage from '../../assets/images/background.jpg';

export const HeaderWrapper = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(12, 13, 14, 0.7),
      rgba(12, 13, 14, 0.7)
    ),
    url(${bgrImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  & .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 25px 55px 25px 55px;

    ${mediaQueries('sizeXS')`
      flex-direction: column;
    `}
  }
`;

export const Logo = styled.a`
  margin-bottom: 15px;
  padding: 25px 0;

  color: #f65261;

  span {
    font-weight: 400;
  }

  :hover {
    color: white;
  }
`;
