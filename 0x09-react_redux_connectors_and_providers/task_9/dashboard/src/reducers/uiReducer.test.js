import { Map } from 'immutable';
import { uiReducer } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('Return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('Return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE }).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it('Change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(undefined, action).toJS()).toEqual(newState.toJS());
  });

  it('Change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(undefined, action).toJS()).toEqual(newState.toJS());
  });

  it('Change isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const action = { type: LOGIN_SUCCESS };
    const newState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(undefined, action).toJS()).toEqual(newState.toJS());
  });

  it('Change isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const action = { type: LOGIN_FAILURE };
    const newState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(undefined, action).toJS()).toEqual(newState.toJS());
  });

  it('Change isUserLoggedIn to false when LOGOUT action is passed', () => {
    const action = { type: LOGOUT };
    const newState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(undefined, action).toJS()).toEqual(newState.toJS());
  });
});
