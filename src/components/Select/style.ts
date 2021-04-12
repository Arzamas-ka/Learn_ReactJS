import styled from 'styled-components';
import ArrowIcon from '../../assets/images/drop-down-arrow.svg';
import { mediaQueries, rgbaMap, colorsRgba, colors } from '../../styles/consts';

export const StyledSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;
  width: 100%;
`;

export const StyledSelectTitle = styled.label`
  display: block;
  margin: 15px 0;

  color: ${colors.coral};
  font-size: 14px;
  text-transform: uppercase;
`;

export const StyledSelectMain = styled.input`
  width: 520px;
  padding: 15px 20px;
  appearance: none;

  color: ${colors.white};
  font-size: 18px;
  font-weight: 100;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  background: ${rgbaMap(colorsRgba.rgba_grey_light, 0.3)} url(${ArrowIcon})
    no-repeat 95%;

  ${mediaQueries('sizeXL')`
    width: 320px;
  `}

  ${mediaQueries('sizeXXS')`
    width: 300px;
  `}
`;

export const StyledSelectOver = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledSelectLabel = styled.label`
  display: block;
  padding: 5px;

  font-size: 18px;
  background-color: ${colors.grey};

  :hover {
    background-color: ${colors.coral};
  }
`;

export const StyledSelectInput = styled.input`
  margin-left: 15px;

  font-size: 30px;
`;
