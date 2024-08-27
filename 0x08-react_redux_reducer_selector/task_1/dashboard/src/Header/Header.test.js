import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

import Header from './Header';

describe('Header tests', () => {
  test('Rendering Header without crashing', () => {
    render(<Header />);
  });

  test('Rendering Header img and h1 tags', () => {
    render(<Header />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});