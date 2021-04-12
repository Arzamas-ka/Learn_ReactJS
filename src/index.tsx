import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';
import ErrorBoundary from './ErrorBoundary';

import store from './store/index.js';

const Index: FC = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Index />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
