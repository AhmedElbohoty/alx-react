import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'App/App';
import store from './store/store';

import './base.css';
import './setupTests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   uiReducer,
//   Map(initialState),
//   composeEnhancers(applyMiddleware(thunk))
// );
