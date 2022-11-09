import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App';
import './i18next/i18next';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/900.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
