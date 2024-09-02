import React from 'react';
import { screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

import Footer from './Footer';
import { renderWithRedux } from '../utils/test_utils';

describe('Footer test', () => {
  test('Rendering Footer without crashing', () => {
    renderWithRedux(<Footer />);
  });

  test('Rendering Footer the text "Copyright"', () => {
    renderWithRedux(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
