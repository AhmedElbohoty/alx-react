import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector } from 'react-redux';

import CourseListRow from './CourseListRow';
import { selectCourses } from '../store/courseSlice/selectors';

function CourseList() {
  const listCourses = useSelector(selectCourses);
  let elements = [
    <CourseListRow key="no" textFirstCell="No course available yet" />,
  ];

  if (listCourses.length) {
    elements = listCourses.map((course) => {
      const { id, name, credit } = course;
      return (
        <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
      );
    });
  }

  return (
    <table id="CourseList" className={css(styles.CourseListTable)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
}

// styles
const styles = StyleSheet.create({
  CourseListTable: {
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
  },
});

export default CourseList;
