import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

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
      width: 710px;
      margin-right: 20px;

      font-size: 18px;

      &::placeholder {
        color: #555555;
        font-size: 20px;
        font-weight: 100;
      }
    }
    &.input-title {
      width: 510px;
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
