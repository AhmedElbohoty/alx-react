// CourseList/CourseList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList tests', () => {
  test('Rendering CourseList without crashing', () => {
    render(<CourseList />);

    expect(screen.getByText('Available courses')).toBeInTheDocument();
  });

  test('renders the correct rows', () => {
    render(<CourseList listCourses={listCourses} />);

    expect(screen.getAllByRole('row')).toHaveLength(5);

    expect(screen.getByText('Available courses')).toBeInTheDocument();
    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText(60)).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText(20)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText(40)).toBeInTheDocument();
  });

  test('Renders no rows - check label', () => {
    render(<CourseList listCourses={[]} />);

    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });

  test('Renders no rows - check counts', () => {
    render(<CourseList listCourses={[]} />);

    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
