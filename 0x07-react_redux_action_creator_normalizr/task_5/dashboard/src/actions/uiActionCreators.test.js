import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('Ui action Creators', () => {
  test('Test login action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email, password },
    });
  });

  test('Test logout action', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });

  test('Test displayNotificationDrawer action', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  test('Test hideNotificationDrawer action', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
