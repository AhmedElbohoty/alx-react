// CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList tests', () => {
  test('Rendering CourseList without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    const rows = wrapper.find('CourseListRow');

    expect(rows.length).toBe(5);

    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');

    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');

    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe(60);

    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe(20);

    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe(40);
  });

  test('Renders no rows - check label', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);

    const rows = wrapper.find('CourseListRow');

    expect(rows.at(2).prop('textFirstCell')).toBe('No course available yet');
  });

  test('Renders no rows - check counts', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);

    const rows = wrapper.find('CourseListRow');

    expect(rows.length).toBe(3);
  });
});
