import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';
import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('Action Creators', () => {
  test('Test markAsAread', () => {
    const index = 0;
    const action = { type: MARK_AS_READ, index };
    expect(markAsAread(index)).toEqual(action);
  });

  test('Test setNotificationFilter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const action = { type: SET_TYPE_FILTER, filter };
    expect(setNotificationFilter(filter)).toEqual(action);
  });
});
