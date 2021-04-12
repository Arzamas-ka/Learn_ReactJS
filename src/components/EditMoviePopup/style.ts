import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { colors } from '../../styles/consts';

export const StyledEditMoviePopupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  position: fixed;
  top: 450px;
  left: 50%;

  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 4px;
  z-index: 10;
  overflow: scroll;
  transform: translate(-50%, -50%);
`;

export const StyledEditMoviePopupContainer = styled.div`
  margin: 0 40px 40px 40px;
`;

export const StyledEditMoviePopupTitle = styled.h2`
  padding: 50px 0 0 50px;

  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 10px 40px 40px 40px;
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 32px;
  height: 32px;

  cursor: pointer;

  :hover {
    color: ${colors.coral};
  }
`;
