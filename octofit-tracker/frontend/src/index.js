import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Set REACT_APP_CODESPACE_NAME for local dev if not set
if (!process.env.REACT_APP_CODESPACE_NAME) {
  const host = window.location.hostname;
  if (host.endsWith('.app.github.dev')) {
    process.env.REACT_APP_CODESPACE_NAME = host.split('-8000')[0];
  }
}
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
