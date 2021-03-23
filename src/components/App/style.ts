import styled, { css } from 'styled-components';
import { StyledBackdropProps } from './models';
import { colorsRgba, rgbaMap } from '../../styles/consts';

export const StyledApp = styled.div`
  margin: 0 auto;
`;

export const StyledBackdrop = styled.div<StyledBackdropProps>`
  position: absolute;

  ${({ active }) =>
    active &&
    css`
      width: 100vw;
      min-height: 100vh;
      min-height: -webkit-fill-available;

      background-color: ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)};
      backdrop-filter: blur(50px);
      opacity: 0.7;
      z-index: 5;
    `}
`;
