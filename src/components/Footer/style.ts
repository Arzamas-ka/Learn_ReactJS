import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  background-color: ${colors.grey_light}; ;
`;
