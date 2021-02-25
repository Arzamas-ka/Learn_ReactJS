import styled from 'styled-components';

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 30%;
    margin-top: 10%;
    margin-bottom: 20px;
  }

  & p {
    padding: 10px;
    font-size: 25px;
  }
`;
