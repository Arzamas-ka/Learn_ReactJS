import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';

export const Calendar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;
  width: 100%;

  .react-datepicker__triangle {
    display: none;
  }

  input {
    width: 520px;
    padding: 15px 20px;

    color: white;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: rgba(85, 85, 85, 0.3);

    ::placeholder {
      color: #555555;
      font-size: 18px;
      font-weight: 100;
    }

    @media screen and (max-width: 600px) {
      width: 320px;
    }

    @media screen and (max-width: 380px) {
      width: 300px;
    }

    &.input-search {
      width: 95%;
      margin-right: 20px;

      font-size: 18px;

      ::placeholder {
        color: #555555;
        font-size: 20px;
        font-weight: 100;

        @media screen and (max-width: 370px) {
          font-size: 16px;
        }
      }

      @media screen and (max-width: 970px) {
        margin-right: 0px;
      }
    }
  }

  label {
    margin: 15px 0;

    color: #f65261;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const CalendarIcon = styled(BiCalendar)`
  position: absolute;
  top: 53px;
  right: 20px;

  width: 30px;
  height: 30px;

  color: #f65261;
  cursor: pointer;
`;