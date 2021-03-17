import styled, { css } from 'styled-components';
import { StyledButtonProps } from './models';
import { mediaQueries, colors, colorsRgba, rgbaMap } from '../../styles/consts';

export const Button = styled.button<StyledButtonProps>`
  ${({ button }) =>
    button &&
    css`
      padding: 10px 20px;

      font-size: 16px;
      color: ${colors.coral};
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
      background-color: ${colors.coral};
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
      color: ${colors.coral};
      border-radius: 4px;
      border: 1px solid ${colors.coral};
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
