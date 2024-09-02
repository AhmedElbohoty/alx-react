import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [
      {
        id: '1',
        name: 'ES6',
        credit: 60,
        isSelected: false,
      },
      {
        id: '2',
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      },
      {
        id: '3',
        name: 'React',
        credit: 40,
        isSelected: false,
      },
    ],
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
});

export const { selectCourse, unSelectCourse } = courseSlice.actions;

export default courseSlice.reducer;
