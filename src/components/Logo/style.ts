import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const Logo = styled.a`
  padding: 25px 0;

  color: ${colors.grey_coral};

  span {
    font-weight: 400;
  }

  :hover {
    color: ${colors.white};
  }
`;
