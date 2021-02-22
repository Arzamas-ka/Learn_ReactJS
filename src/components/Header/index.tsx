import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: blue;
`;

const Header: React.FC = () => (
  <>
    <Title>Hello Header!</Title>
  </>
);

export default Header;
