import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice/slice';
import coursesReducer from './courseSlice/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    courses: coursesReducer,
  },
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: appReducer,
    preloadedState,
  });
};

export default store;
