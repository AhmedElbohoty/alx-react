import { createSlice } from '@reduxjs/toolkit';
import { fetchNotificationsThunk } from './thunks';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    isFetching: true,
  },
  reducers: {
    updateId: (state, action) => {
      const { id, newValue } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? { ...notification, id: newValue }
          : notification
      );
    },
    updateAuthor: (state, action) => {
      const { id, newAuthor } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? { ...notification, author: newAuthor }
          : notification
      );
    },
    updateEmail: (state, action) => {
      const { id, newEmail } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              author: { ...notification.author, email: newEmail },
            }
          : notification
      );
    },
    updatePicture: (state, action) => {
      const { id, newPicture } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              author: { ...notification.author, picture: newPicture },
            }
          : notification
      );
    },
    updateAge: (state, action) => {
      const { id, newAge } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? { ...notification, author: { ...notification.author, age: newAge } }
          : notification
      );
    },
    updateContextGuid: (state, action) => {
      const { id, newGuid } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              context: { ...notification.context, guid: newGuid },
            }
          : notification
      );
    },
    updateIsRead: (state, action) => {
      const { id, newIsRead } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              context: { ...notification.context, isRead: newIsRead },
            }
          : notification
      );
    },
    updateType: (state, action) => {
      const { id, newType } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              context: { ...notification.context, type: newType },
            }
          : notification
      );
    },
    updateValue: (state, action) => {
      const { id, newValue } = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              context: { ...notification.context, value: newValue },
            }
          : notification
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotificationsThunk.pending, (state) => {
      state.isFetching = true;
      state.notifications = [];
    });

    builder.addCase(fetchNotificationsThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.notifications = action.payload;
    });
  },
});

export const {
  updateId,
  updateAuthor,
  updateEmail,
  updatePicture,
  updateAge,
  updateContextGuid,
  updateIsRead,
  updateType,
  updateValue,
} = notificationSlice.actions;

export default notificationSlice.reducer;
