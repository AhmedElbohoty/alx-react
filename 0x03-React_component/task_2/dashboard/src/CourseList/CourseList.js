import React from 'react';
import PropTypes from 'prop-types';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

import './CourseList.css';

function CourseList({ listCourses }) {
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
    <table id="CourseList">
      <thead className="courselist-thead">
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

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
