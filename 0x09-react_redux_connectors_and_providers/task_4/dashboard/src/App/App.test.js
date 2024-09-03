import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';

import App from './App';
import { renderWithRedux } from '../utils/test_utils';
import store from '../store/store';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App tests', () => {
  test('Rendering App without crash', () => {
    renderWithRedux(<App />, { store });
  });

  test('Rendering App with login', () => {
    renderWithRedux(<App />, { store });

    expect(
      screen.getByText('Login to access the full dashboard')
    ).toBeInTheDocument();
  });

  test('Rendering App with CourseList', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true },
        courses: { courses: [] },
      },
    };
    renderWithRedux(<App />, options);

    expect(
      screen.queryByText(/Login to access the full dashboard/)
    ).not.toBeInTheDocument();
    expect(screen.getByText('Available courses')).toBeInTheDocument();
  });
});

describe('App state', () => {
  test('The default displayDrawer is false', () => {
    const { ui } = renderWithRedux(<App />, { store });

    const notif = ui.queryByText('Here is the list of notifications');
    expect(notif).not.toBeInTheDocument();
  });

  test.skip('When user calls handleDisplayDrawer, displayDrawer is true', async () => {
    const screen = renderWithRedux(<App />, { store });

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

  test.skip('When pressing Control + h', () => {
    renderWithRedux(<App isLoggedIn={true} logOut={logOutMock} />);

    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });

  test('When Control or h keys are pressed separately', () => {
    renderWithRedux(<App isLoggedIn={true} logOut={logOutMock} />, { store });

    // Simulate keydown event for Control key only
    fireEvent.keyDown(document, { key: 'Control' });
    fireEvent.keyDown(document, { key: 'h' });

    expect(logOutMock).not.toHaveBeenCalled();
    expect(alertSpy).not.toHaveBeenCalled();
  });
});