import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import { jest } from '@jest/globals';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

import WithLogging from './WithLogging';
import Login from '../Login/Login';

const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WithLogging HOC Tests', () => {
  afterEach(() => {
    mockLog.mockClear();
  });

  it('should log mount and unmount for pure HTML element', () => {
    const HOCComp = WithLogging(() => <p />);
    const { unmount } = render(<HOCComp />);

    expect(mockLog).toHaveBeenCalledWith('Component Component is mounted');
    unmount();
    expect(mockLog).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });

  it('should log mount and unmount for Login component', () => {
    const HOCComp = WithLogging(Login);
    const { unmount } = render(<HOCComp />);

    expect(mockLog).toHaveBeenCalledWith('Component Login is mounted');
    unmount();
    expect(mockLog).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
