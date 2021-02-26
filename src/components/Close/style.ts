import styled from 'styled-components';

export const Close = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 32px;
  height: 32px;

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    left: 15px;

    height: 33px;
    width: 2px;
    background-color: white;
  }

  &:hover::before,
  &:hover::after {
    content: ' ';
    position: absolute;
    left: 15px;

    height: 33px;
    width: 2px;
    background-color: #f65261;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
