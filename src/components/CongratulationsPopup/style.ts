import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { colors } from '../../styles/consts';

export const StyledCongratulationsPopupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  position: fixed;
  top: 350px;
  left: 50%;
  min-width: 320px;

  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 4px;
  z-index: 10;
  overflow: scroll;
  transform: translate(-50%, -50%);
`;

export const StyledCongratulationsPopupText = styled.p`
  padding: 50px;

  font-size: 20px;
  text-align: center;
`;

export const StyledCongratulationsPopupTitle = styled.h2`
  margin: 0 auto;
  padding-top: 40px;

  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 1ю2;
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 32px;
  height: 32px;

  :hover {
    color: ${colors.coral};
  }
`;

export const StyledDoneIcon = styled(IoMdCheckmarkCircle)`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 50px;

  color: ${colors.coral};
`;
