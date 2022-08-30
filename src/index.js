import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OnboardContextProvider } from './store/onboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OnboardContextProvider>
      <App />
    </OnboardContextProvider>
  </React.StrictMode>
);
