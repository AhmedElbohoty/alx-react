// CourseListRow.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

import CourseListRow from './CourseListRow';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow tests', () => {
  test('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Text first cell" />
        </tbody>
      </table>
    );

    const th = screen.getByRole('columnheader');
    expect(th).toHaveTextContent('Text first cell');
    expect(th).toHaveAttribute('colspan', '2');
  });

  test('renders two cells when textSecondCell is present', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="Text first cell"
            textSecondCell="Text second cell"
          />
        </tbody>
      </table>
    );

    const ths = screen.getAllByRole('columnheader');
    expect(ths[0]).toHaveTextContent('Text first cell');
    expect(ths[1]).toHaveTextContent('Text second cell');
  });

  test('renders two td elements within a tr element', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={false}
            textFirstCell="Text first cell"
            textSecondCell="Text second cell"
          />
        </tbody>
      </table>
    );

    const tds = screen.getAllByRole('cell');
    expect(tds[0]).toHaveTextContent('Text first cell');
    expect(tds[1]).toHaveTextContent('Text second cell');
  });
});
