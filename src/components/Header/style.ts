import styled from 'styled-components';
import { mediaQueries, colors, colorsRgba, rgbaMap } from '../../styles/consts';

import bgrImage from '../../assets/images/background.jpg';

export const StyledHeaderWrapper = styled.div`
  background-image: linear-gradient(
      to right,
      ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)},
      ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)}
    ),
    url(${bgrImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  overflow: auto;
`;

export const StyledHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 55px;

  ${mediaQueries('sizeXS')`
      flex-direction: column;
    `}
`;
