import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotificationsThunk = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await import('./notifications.json');

    return response.default;
  }
);
