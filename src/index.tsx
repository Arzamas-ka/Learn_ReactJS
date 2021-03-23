import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import ErrorBoundary from './ErrorBoundary';

const Index: FC = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

ReactDOM.render(<Index />, document.getElementById('root'));
