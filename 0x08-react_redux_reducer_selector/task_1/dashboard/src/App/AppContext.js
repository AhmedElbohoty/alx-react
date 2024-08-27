import { createContext } from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const defaultLogout = () => {};

export const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogout,
});
