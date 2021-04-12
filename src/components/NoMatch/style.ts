import styled from 'styled-components';
import { colors } from '../../styles/consts';

export const StyledNoMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: 100;
  font-family: Montserrat, Arial, sans-serif;
  background-color: ${colors.grey_dark};
`;

export const StyledNoMatchImage = styled.img`
  width: 50%;
  margin-top: 70px;
  margin-bottom: 100px;
`;

export const StyledNoMatchMessage = styled.p`
  padding: 10px;
  font-size: 35px;
  color: ${colors.white};
`;