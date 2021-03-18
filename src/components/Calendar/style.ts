import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';
import { colors } from './../../styles/consts';

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;
  width: 100%;

  .react-datepicker__triangle {
    display: none;
  }
`;

export const StyledCalendarIcon = styled(BiCalendar)`
  position: absolute;
  top: 53px;
  right: 20px;

  width: 30px;
  height: 30px;

  color: ${colors.coral};
  cursor: pointer;
`;
