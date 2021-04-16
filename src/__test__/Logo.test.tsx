import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Logo from '../components/Logo/index';

it('<Logo />', () => {
  render(
    <Router>
      <Logo />
    </Router>,
  );
  const logoText = screen.getByText('netflix');

  expect(logoText).toBeInTheDocument();
});
