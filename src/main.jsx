import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { Providers } from './contexts';
import { GlobalStyle } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
