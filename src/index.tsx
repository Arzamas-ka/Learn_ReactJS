import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/index.js';

import App from 'components/App';
import ErrorBoundary from './ErrorBoundary';
import ModalsContextProvider from './components/App/ModalsContext';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
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
