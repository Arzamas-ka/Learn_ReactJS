import * as React from 'react';
import { FC } from 'react';

import { StyledFooter } from './style';

import Logo from 'components/Logo';

const Footer: FC = () => (
  <StyledFooter>
    <Logo />
  </StyledFooter>
);

export default Footer;
