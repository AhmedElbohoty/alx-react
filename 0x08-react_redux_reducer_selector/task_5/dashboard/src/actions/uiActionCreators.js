import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

export function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function logout() {
  return { type: LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

// Bounded
export function boundLogin(dispatch) {
  return bindActionCreators(login, dispatch);
}

export function boundLogout(dispatch) {
  return bindActionCreators(logout, dispatch);
}

export function boundDisplayNotificationDrawer(dispatch) {
  return bindActionCreators(displayNotificationDrawer, dispatch);
}

export function boundHideNotificationDrawer(dispatch) {
  return bindActionCreators(hideNotificationDrawer, dispatch);
}

export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(dispatch)(email, password);

    return fetch(
      'http://127.0.0.1:5500/0x07-react_redux_action_creator_normalizr/task_7/dashboard/dist/login-success.json'
    )
      .then((res) => res.json())
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  };
}
