import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login tests', () => {
  it('Rendering login without crashing', () => {
    render(<Login />);
  });

  it('Should have email input and its label', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const emailLabel = screen.getByText(/Email:/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
  });

  it('Should have password input and its label', () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const passwordLabel = screen.getByText(/Password:/i);

    expect(passwordInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
});
