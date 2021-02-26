import styled from 'styled-components';

export const App = styled.div`
  margin: 0 auto;
`;

export const Backdrop = styled.div`
  &.backdrop {
    &--active {
      position: absolute;
      width: 100%;
      height: 100vw;
      max-height: 100vh;
      background-color: rgba(12, 13, 14, 0.7);
      backdrop-filter: blur(50px);

      opacity: 0.7;
      z-index: 5;
    }
  }
`;
