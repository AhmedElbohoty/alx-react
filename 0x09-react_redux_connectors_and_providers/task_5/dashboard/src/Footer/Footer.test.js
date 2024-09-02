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
import store from '../store/store';

describe('Footer test', () => {
  test('Rendering Footer without crashing', () => {
    renderWithRedux(<Footer />, { store });
  });

  test('Rendering Footer the text "Copyright"', () => {
    renderWithRedux(<Footer />, { store });
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
