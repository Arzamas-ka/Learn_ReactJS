import React, { FC } from 'react';

import { StyledLogo, StyledSpan } from './style';

const Logo: FC = () => (
  <StyledLogo href="#">
    <h2>
      netflix<StyledSpan>roulette</StyledSpan>
    </h2>
  </StyledLogo>
);

export default Logo;
