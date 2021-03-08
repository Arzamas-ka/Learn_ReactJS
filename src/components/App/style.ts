import styled, { css } from 'styled-components';

interface BackdropProps {
  active: boolean;
}

export const App = styled.div`
  margin: 0 auto;
`;

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;

  ${({ active }) =>
    active &&
    css`
      width: 100vw;
      min-height: 100vh;
      min-height: -webkit-fill-available;

      background-color: rgba(12, 13, 14, 0.7);
      backdrop-filter: blur(50px);
      opacity: 0.7;
      z-index: 5;
    `}
`;
