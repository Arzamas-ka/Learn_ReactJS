import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const StyledLogo = styled(Link)`
  padding: 25px 55px;
  align-self: baseline;

  color: ${colors.coral};
  text-decoration: none;

  :hover {
    color: ${colors.white};
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
`;
