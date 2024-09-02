import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: defaultUser,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = defaultUser;
    },
  },
});

export const { logOut, logIn } = appSlice.actions;

export default appSlice.reducer;
