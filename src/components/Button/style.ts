import styled, { css } from 'styled-components';
import { mediaQueries } from '../../styles/consts';

interface ButtonProps {
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ button }) =>
    button &&
    css`
      padding: 10px 20px;

      font-size: 16px;
      color: #f65261;
      border-radius: 4px;
      background-color: rgba(85, 85, 85, 0.9);
      text-transform: uppercase;

      :hover {
        color: white;
      }
    `};

  ${({ submit }) =>
    submit &&
    css`
      align-self: flex-end;

      padding: 16px 45px;

      font-size: 16px;
      color: white;
      border-radius: 4px;
      background-color: #f65261;
      text-transform: uppercase;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      :hover {
        color: #424242;
      }
    `};

  ${({ reset }) =>
    reset &&
    css`
      padding: 16px 40px;
      margin-right: 15px;

      font-size: 16px;
      color: white;
      border-radius: 4px;
      border: 1px solid #f65261;
      background-color: transparent;
      text-transform: uppercase;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      &:hover {
        color: #424242;
      }
    `};
`;
