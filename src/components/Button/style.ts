import styled, { css } from 'styled-components';
import { mediaQueries, colors, colorsRgba, rgbaMap } from '../../styles/consts';

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
      color: ${colors.grey_coral};
      border-radius: 4px;
      background-color: ${rgbaMap(colorsRgba.rgba_grey_light, 0.9)};
      text-transform: uppercase;

      :hover {
        color: ${colors.white};
      }
    `};

  ${({ submit }) =>
    submit &&
    css`
      align-self: flex-end;

      padding: 16px 45px;

      font-size: 16px;
      color: ${colors.white};
      border-radius: 4px;
      background-color: ${colors.grey_coral};
      text-transform: uppercase;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      :hover {
        color: ${colors.grey};
      }
    `};

  ${({ reset }) =>
    reset &&
    css`
      padding: 16px 40px;
      margin-right: 15px;

      font-size: 16px;
      color: ${colors.white};
      border-radius: 4px;
      border: 1px solid ${colors.grey_coral};
      background-color: transparent;
      text-transform: uppercase;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      &:hover {
        color: ${colors.grey};
      }
    `};
`;
