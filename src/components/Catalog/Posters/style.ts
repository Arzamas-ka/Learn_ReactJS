import styled from 'styled-components';

export const Posters = styled.div`
  padding: 0 30px 30px 30px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    & li {
      margin: 0 15px;

      & img {
        width: 320px;
        height: 455px;
      }

      & div {
        display: flex;
        justify-content: space-between;


        padding: 10px 0;
        color: grey;

        & h3{
          font-size: 22px;
        }

        & span {
          padding: 5px 10px;
          border: 1px solid grey;
          border-radius: 4px;
        }
      }

      & p {
        padding-bottom: 15px;
        color: grey;
      }
    }
  }
`;
