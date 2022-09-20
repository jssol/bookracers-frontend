import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>,
);
