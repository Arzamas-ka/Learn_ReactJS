import styled, { css } from 'styled-components';
import { StyledButtonProps } from './models';
import { mediaQueries, colors, colorsRgba, rgbaMap } from '../../styles/consts';

export const Button = styled.button<StyledButtonProps>`
  font-size: 16px;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ button }) =>
    button &&
    css`
      padding: 10px 20px;

      color: ${colors.coral};
      background-color: ${rgbaMap(colorsRgba.rgba_grey_light, 0.9)};
      
      :hover {
        color: ${colors.white};
      }
    `};

  ${({ submit }) =>
    submit &&
    css`
      align-self: flex-end;

      padding: 16px 45px;

      color: ${colors.white};
      background-color: ${colors.coral};

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

      color: ${colors.coral};
      border: 1px solid ${colors.coral};
      background-color: transparent;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      &:hover {
        color: ${colors.grey};
      }
    `};

  ${({ load }) =>
    load &&
    css`
      display: block;
      margin: 0 auto;
      padding: 15px 30px;
      margin-bottom: 80px;

      color: ${colors.white};
      border-radius: 30px;
      border: 1px solid ${colors.white};
      background-color: transparent;

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      &:hover {
        color: ${colors.grey};
      }

      &:active {
        border-color: ${colors.grey};
      }
    `};

  ${({ magnifier }) =>
    magnifier &&
    css`
      display: block;
      padding: 15px 30px;

      font-size: 50px;
      background-color: transparent;
      color: ${colors.coral};

      ${mediaQueries('sizeXXXL')`
        align-self: center;

        margin-top: 20px;
      `}

      &:hover {
        transform: scale(1.2);
      }
    `};
`;
