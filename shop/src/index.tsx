import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { setupStore } from './app/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
