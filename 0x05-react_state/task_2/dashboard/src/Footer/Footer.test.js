import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

import Footer from './Footer';

describe('Footer test', () => {
  it('Rendering Footer without crashing', () => {
    render(<Footer />);
  });

  it('Rendering Footer the text "Copyright"', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
