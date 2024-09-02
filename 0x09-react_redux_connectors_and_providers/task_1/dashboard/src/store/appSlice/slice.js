import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  email: '',
  password: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: defaultUser,
    isUserLoggedIn: false,
    displayDrawer: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    logOut: (state) => {
      state.user = defaultUser;
      state.isUserLoggedIn = false;
    },
    updateDisplayDrawer: (state, action) => {
      state.displayDrawer = action.payload;
    },
  },
});

export const { logOut, logIn, updateDisplayDrawer } = appSlice.actions;

export default appSlice.reducer;
