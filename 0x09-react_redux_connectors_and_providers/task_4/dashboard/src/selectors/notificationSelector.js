import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.notifications.filter;

export const getNotifications = (state) => state.notifications.notifications;

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) =>
    notifications.filter((notification) => !notification.isRead)
);
