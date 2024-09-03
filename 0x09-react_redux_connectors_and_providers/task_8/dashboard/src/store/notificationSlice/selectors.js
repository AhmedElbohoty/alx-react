export const selectNotifIsFetching = (state) => state.notifications.isFetching;

export const selectNotifications = (state) => state.notifications.notifications;

export const selectNotificationById = (state, id) =>
  state.notifications.notifications.find(
    (notification) => notification.id === id
  );

export const selectAuthorById = (state, id) =>
  selectNotificationById(state, id)?.author;

export const selectEmailById = (state, id) =>
  selectAuthorById(state, id)?.email;

export const selectPictureById = (state, id) =>
  selectAuthorById(state, id)?.picture;

export const selectAgeById = (state, id) => selectAuthorById(state, id)?.age;

export const selectContextGuidById = (state, id) =>
  selectNotificationById(state, id)?.context.guid;

export const selectIsReadById = (state, id) =>
  selectNotificationById(state, id)?.context.isRead;

export const selectTypeById = (state, id) =>
  selectNotificationById(state, id)?.context.type;

export const selectValueById = (state, id) =>
  selectNotificationById(state, id)?.context.value;
