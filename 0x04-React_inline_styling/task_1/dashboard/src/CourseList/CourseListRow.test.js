import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

import CourseListRow from './CourseListRow';

describe('CourseListRow tests', () => {
  test('Test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Text first cell" />
    );
    const ths = wrapper.find('th');
    expect(ths.text()).toBe('Text first cell');
    expect(ths.prop('colSpan')).toBe(2);
  });

  test('Test the component renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Text first cell"
        textSecondCell="Text second cell"
      />
    );
    const ths = wrapper.find('th');

    expect(ths.at(0).text()).toBe('Text first cell');
    expect(ths.at(1).text()).toBe('Text second cell');
  });

  test('test the component renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Text first cell"
        textSecondCell="Text second cell"
      />
    );

    const tds = wrapper.find('td');
    expect(tds.at(0).text()).toBe('Text first cell');
    expect(tds.at(1).text()).toBe('Text second cell');
  });
});
