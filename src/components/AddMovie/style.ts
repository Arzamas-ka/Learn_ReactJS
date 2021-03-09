import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { colors } from '../../styles/consts';

export const AddMovie = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  /* display: none; */

  position: fixed;
  top: 50%;
  left: 50%;

  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 4px;
  z-index: 10;
  overflow: scroll;
  transform: translate(-50%, -50%);
`;

export const AddMovieContainer = styled.div`
  margin: 10px 40px 40px 40px;
`;

export const AddMovieTitle = styled.h2`
  padding: 50px 0 0 50px;

  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 10px 40px 40px 40px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 32px;
  height: 32px;

  :hover {
    color: #f65261;
  }
`;
