import { createSlice } from '@reduxjs/toolkit';
import { fetchCoursesThunk } from './thunks';

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isFetching: true,
  },
  reducers: {
    selectCourse: (state, action) => {
      state.courses = state.courses.map((c) => {
        if (c.id !== action.payload) return c;
        c.isSelected = true;
        return c;
      });
    },
    unSelectCourse: (state, action) => {
      state.courses = state.courses.map((c) => {
        if (c.id !== action.payload) return c;
        c.isSelected = false;
        return c;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoursesThunk.pending, (state) => {
      state.isFetching = true;
      state.courses = null;
    });

    builder.addCase(fetchCoursesThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.courses = action.payload;
    });
  },
});

export const { selectCourse, unSelectCourse } = courseSlice.actions;

export default courseSlice.reducer;
