import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { setupStore } from '../store/store';

export function renderWithRedux(ui, options = {}) {
  let { preloadedState = {}, store, ...renderOptions } = options;

  if (!store) {
    store = setupStore(preloadedState);
  }

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    user: userEvent.setup(),
    ui: render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
