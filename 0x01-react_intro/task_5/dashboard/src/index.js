import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App/App';
import Notifications from 'Notifications/Notifications';

import './setupTests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const notifications = ReactDOM.createRoot(
  document.getElementById('root-notifications')
);
notifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
