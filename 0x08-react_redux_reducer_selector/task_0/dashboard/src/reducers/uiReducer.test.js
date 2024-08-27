import { uiReducer } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('Return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('Return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
  });

  it('Change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(undefined, action)).toEqual(newState);
  });
});
