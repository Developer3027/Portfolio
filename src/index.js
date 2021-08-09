import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './utlis/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
