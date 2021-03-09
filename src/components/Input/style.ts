import styled, { css } from 'styled-components';
import { mediaQueries, colors, colorsRgba, rgbaMap } from '../../styles/consts';

interface InputProps {
  search?: boolean;
  topic?: boolean;
  release?: boolean;
  movie?: boolean;
  genre?: boolean;
  overview?: boolean;
  runtime?: boolean;
  placeholder?: string;
}

export const Input = styled.div<InputProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  input {
    width: 520px;
    padding: 15px 20px;

    color: ${colors.white};
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: ${rgbaMap(colorsRgba.rgba_grey_light, 0.3)};

    &::placeholder {
      color: ${colors.grey_light};
      font-size: 18px;
      font-weight: 100;
    }

    ${mediaQueries('sizeXL')`
      width: 320px;
    `}

    ${mediaQueries('sizeXXS')`
      width: 300px;
    `}
  }

  label {
    margin: 15px 0;

    color: ${colors.grey_coral};
    font-size: 14px;
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      input {
        width: 95%;
        margin-right: 20px;

        font-size: 18px;

        &::placeholder {
          font-size: 20px;
          font-weight: 100;

          ${mediaQueries('sizeXXS')`
            font-size: 16px;
          `}
        }

        ${mediaQueries('sizeXXXL')`
          margin-right: 0px;
        `}
      }
    `};
`;
