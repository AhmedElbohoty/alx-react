// CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList tests', () => {
  test('Rendering CourseList without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);

    const rows = wrapper.find('CourseListRow');

    expect(rows.length).toBe(5);

    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');

    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');

    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe('60');

    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe('20');

    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe('40');
  });
});
