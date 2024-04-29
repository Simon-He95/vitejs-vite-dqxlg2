import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import initUnocssRuntime from '@unocss/runtime';

//unocss
import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';

// unocss runtime
initUnocssRuntime();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
