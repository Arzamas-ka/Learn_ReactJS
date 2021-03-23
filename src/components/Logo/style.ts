import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const StyledLogo = styled.a`
  padding: 25px 0;

  color: ${colors.coral};

  :hover {
    color: ${colors.white};
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
`;
