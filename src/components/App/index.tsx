import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';

const Title = styled.h2`
  color: red;
`;

const App: React.FC = () => (
  <>
    <Title>Hello App!</Title>
    <Header />
  </>
);

export default App;
