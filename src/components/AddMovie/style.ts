import styled from 'styled-components';

export const AddMovie = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  display: none;

  position: fixed;
  top: 50%;
  left: 50%;

  color: white;
  background-color: #232323;
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
  color: white;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
