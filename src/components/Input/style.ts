import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  input {
    padding: 15px 20px;

    color: white;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: rgba(85, 85, 85, 0.3);

    &::placeholder {
      color: #555555;
      font-size: 20px;
      font-weight: 100;
    }

    &.input-search {
      width: 95%;
      margin-right: 20px;

      font-size: 18px;

      &::placeholder {
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
    &.input-title {
      width: 95%;
      padding: 20px;

      font-size: 14px;
    }
  }

  label {
    margin-bottom: 15px;

    color: #f65261;
    font-size: 18px;
    text-transform: uppercase;
  }
`;