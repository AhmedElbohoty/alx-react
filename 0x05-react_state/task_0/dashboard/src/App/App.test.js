import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';

import App from './App';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App tests', () => {
  test('Rendering App without crash', () => {
    render(<App />);
  });

  test('Rendering App with login', () => {
    render(<App isLoggedIn={false} />);

    expect(
      screen.getByText('Login to access the full dashboard')
    ).toBeInTheDocument();
  });

  test('Rendering App with CourseList', () => {
    render(<App isLoggedIn={true} />);

    expect(
      screen.queryByText('Login to access the full dashboard')
    ).not.toBeInTheDocument();
    expect(screen.getByText('Available courses')).toBeInTheDocument();
  });
});

describe('App state', () => {
  test('The default displayDrawer is false', () => {
    const screen = render(<App />);

    const notif = screen.queryByText('Here is the list of notifications');
    expect(notif).not.toBeInTheDocument();
  });

  test('When user calls handleDisplayDrawer, displayDrawer is true', async () => {
    // When use enzyme, we will need to use
    // .instance().handleDisplayDrawer()
    // .instance().handleHideDrawer()
    const screen = render(<App />);

    const button = screen.getByText('Your notifications');
    await userEvent.click(button);

    const notif = screen.queryByText('Here is the list of notifications');
    expect(notif).toBeInTheDocument();
  });
});

describe('Handle keydown tests', () => {
  let logOutMock;
  let alertSpy;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  test('When pressing Control + h', () => {
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });

  test('When Control or h keys are pressed separately', () => {
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    // Simulate keydown event for Control key only
    fireEvent.keyDown(document, { key: 'Control' });
    fireEvent.keyDown(document, { key: 'h' });

    expect(logOutMock).not.toHaveBeenCalled();
    expect(alertSpy).not.toHaveBeenCalled();
  });
});
