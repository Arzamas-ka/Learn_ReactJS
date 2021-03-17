import React, { FC } from 'react';

// types and styles
import { StyledFooter } from './style';

// components
import Logo from 'components/Logo';

const Footer: FC = () => (
  <StyledFooter>
    <Logo />
  </StyledFooter>
);

export default Footer;
