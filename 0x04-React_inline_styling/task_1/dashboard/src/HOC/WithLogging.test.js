import React from 'react';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(<HOCComp />);

    expect(mockLog).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(mockLog).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });

  it('should log mount and unmount for Login component', () => {
    const HOCComp = WithLogging(Login);
    const wrapper = shallow(<HOCComp />);

    expect(mockLog).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(mockLog).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
