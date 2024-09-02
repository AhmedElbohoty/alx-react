export const selectCourses = ({ courses }) => courses.courses;
export const selectSelectedCourses = ({ courses }) =>
  courses.courses.filter((course) => course.isSelected);
export const selectCourseById = ({ courses }, courseId) =>
  courses.courses.find((course) => course.id === courseId);
export const selectTotalCredits = ({ courses }) =>
  courses.courses.reduce(
    (total, course) => total + (course.isSelected ? course.credit : 0),
    0
  );
