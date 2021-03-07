import React, { FC } from 'react';

import { Footer as FooterWrapper } from './style';

import Logo from 'components/Logo';
import Calendar from 'components/Calendar';

const Footer: FC = () => (
  <FooterWrapper>
    <Logo />
    <Calendar />
  </FooterWrapper>
);

export default Footer;
