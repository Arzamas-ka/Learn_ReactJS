import styled from 'styled-components';

import bgrImage from '../../assets/images/background.jpg';

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;

  width: 100%;
  padding: 25px 55px 125px 55px;

  background-color: rgba(12, 13, 14, 0.7);
  z-index: 10;

  & .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderBgr = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;

  display: block;
  width: 100%;
  height: 395px;

  background-image: url(${bgrImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.7;
`;

export const Logo = styled.a`
  margin-bottom: 15px;
  padding: 25px 0;

  color: #f65261;

  span {
    font-weight: 400;
  }

  :hover {
    color: white;
  }
`;
