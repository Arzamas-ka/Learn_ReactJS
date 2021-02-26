import styled from 'styled-components';

export const Search = styled.div`
  padding: 25px 55px 55px 55px;

  @media screen and (max-width: 510px) {
      padding: 25px 15px 55px 15px;
    }

  h2 {
    padding: 35px 0;
    margin: 0 60px;

    font-size: 30px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;

    @media screen and (max-width: 880px) {
    text-align: center;
  }
  
    @media screen and (max-width: 510px) {
      margin: 0;

      font-size: 25px;
      text-align: center;
    }

    @media screen and (max-width: 450px) {
      margin: 0;

      font-size: 23px;
      text-align: center;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`;