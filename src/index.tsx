import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'components/App';
import ErrorBoundary from './ErrorBoundary';

import store from './store/index.js';

import ModalsContextProvider from './components/App/ModalsContext';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
    <ModalsContextProvider>
      <Router>
        <App />
      </Router>
      </ModalsContextProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
