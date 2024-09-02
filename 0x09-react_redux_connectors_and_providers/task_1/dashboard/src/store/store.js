import { configureStore } from '@reduxjs/toolkit';

import appSlice from './appSlice/slice';

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
