import React from 'react';
import { screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

import Header from './Header';
import { renderWithRedux } from '../utils/test_utils';
import store from '../store/store';

describe('Header tests', () => {
  test('Rendering Header without crashing', () => {
    renderWithRedux(<Header />, { store });
  });

  test('Rendering Header img and h1 tags', () => {
    renderWithRedux(<Header />, { store });
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
