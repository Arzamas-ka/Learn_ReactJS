import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Logo from '../components/Logo/index';

describe('<Logo />', () => {
  it('matches with snapshot', () => {
    const { baseElement } = render(
      <Router>
        <Logo />
      </Router>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('shows text', () => {
    const logoComponent = render(
      <Router>
        <Logo />
      </Router>,
    );
    const logoText = logoComponent.getByRole('heading', {
      name: /netflix roulette/i,
    });

    expect(logoText).toBeInTheDocument();
  });
});