import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App/App';

import './base.css';
import './setupTests';

import './schema/notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
