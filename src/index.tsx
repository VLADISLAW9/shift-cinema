import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';

import { TanStackQueryProvider } from './app/providers/TanStackQueryProvider';

import '@/app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TanStackQueryProvider>
        <App />
      </TanStackQueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
