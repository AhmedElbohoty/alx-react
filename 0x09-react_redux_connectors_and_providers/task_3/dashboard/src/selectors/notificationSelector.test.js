import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'urgent', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    },
  };

  test('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const result = getNotifications(state);
    expect(result).toEqual(state.notifications.notifications);
    expect(result).toHaveLength(3);
  });

  test('getUnreadNotifications returns a list of the unread message entities within the reducer', () => {
    const result = getUnreadNotifications(state);
    expect(result).toEqual([
      { id: 1, isRead: false, type: 'urgent', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ]);
    expect(result).toHaveLength(2);
  });
});
