import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoursesThunk = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await import('./courses.json');

    return response.default;
  }
);
