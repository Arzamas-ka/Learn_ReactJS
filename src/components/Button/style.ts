import styled from 'styled-components';

export const Button = styled.button`
  &.btn-button {
    padding: 10px 20px;

    font-size: 16px;
    color: #f65261;
    border-radius: 4px;
    background-color: rgba(85, 85, 85, 0.9);
    text-transform: uppercase;

    &:hover {
      color: white;
    }
  }

  &.btn-submit {
    align-self: flex-end;

    padding: 16px 45px;

    font-size: 16px;
    color: white;
    border-radius: 4px;
    background-color: #f65261;
    text-transform: uppercase;

    @media screen and (max-width: 970px) {
      align-self: center;
    
      margin-top: 20px;
  }

    &:hover {
      color: #424242;
    }
  }

  &.btn-reset {
    padding: 16px 40px;
    margin-right: 15px;

    font-size: 16px;
    color: white;
    border-radius: 4px;
    border: 1px solid #f65261;
    background-color: transparent;
    text-transform: uppercase;

    @media screen and (max-width: 970px) {
      align-self: center;
    
      margin-top: 20px;
  }

    &:hover {
      color: #424242;
    }
  }
`;
