import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from 'src/reportWebVitals';
import App from 'src/App';
import Notifications from 'src/Notifications';

import './styles/base.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notifications = ReactDOM.createRoot(
  document.getElementById('root-notifications')
);
notifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
