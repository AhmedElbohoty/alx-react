import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: appReducer,
    preloadedState,
  });
};

export default store;
