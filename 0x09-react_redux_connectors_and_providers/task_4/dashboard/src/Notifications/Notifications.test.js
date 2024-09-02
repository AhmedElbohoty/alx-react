import React from 'react';
import { screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { renderWithRedux } from '../utils/test_utils';
import store from '../store/store';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notification tests', () => {
  test('Rendering Notification component without crashing', () => {
    renderWithRedux(<Notifications />, { store });
  });

  test('ul is rendered', () => {
    renderWithRedux(<Notifications />, { store });
    const ulElement = screen.getByText(/Your notifications/);
    expect(ulElement).toBeInTheDocument();
  });

  test('Three list items are rendered', () => {
    const options = { preloadedState: { app: { displayDrawer: true } } };
    renderWithRedux(
      <Notifications listNotifications={listNotifications} />,
      options
    );

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('No list items are rendered', () => {
    const options = { preloadedState: { app: { displayDrawer: true } } };
    const { ui } = renderWithRedux(
      <Notifications listNotifications={[]} />,
      options
    );
    const noNotif = ui.queryByText('No new notification for now');
    expect(noNotif).toBeInTheDocument();
  });

  test('Rendering correct text', () => {
    const options = { preloadedState: { app: { displayDrawer: true } } };
    renderWithRedux(<Notifications />, options);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
  });

  test('Rendering Notification without drawer', () => {
    renderWithRedux(<Notifications />, { store });
    const notificationContainer = screen.queryByText(
      'Here is the list of notifications'
    );
    expect(notificationContainer).not.toBeInTheDocument();
  });

  test('Rendering Notification with drawer', () => {
    const options = { preloadedState: { app: { displayDrawer: true } } };
    renderWithRedux(<Notifications />, options);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
  });
});

describe('Component re-rendering tests', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'value 1', html: null },
    { id: 2, type: 'default', value: 'value 2', html: null },
  ];

  test.skip('should rerender with a longer list', () => {
    const longerList = [
      ...notifications,
      { id: 3, type: 'default', value: 'value 3', html: null },
    ];

    const { rerender } = renderWithRedux(
      <Notifications listNotifications={notifications} />
    );

    rerender(<Notifications listNotifications={longerList} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

describe('Notifications state tests', () => {
  test('When displayDrawer is true, the menu is displayed', () => {
    const options = { preloadedState: { app: { displayDrawer: true } } };

    renderWithRedux(<Notifications />, options);
    const list = screen.getByText('Here is the list of notifications');
    expect(list).toBeInTheDocument();
    const notifs = screen.queryByText('Your notifications');
    expect(notifs).not.toBeInTheDocument();
  });

  test('When displayDrawer is false, the menu is not displayed', () => {
    renderWithRedux(<Notifications />, { store });
    const notifs = screen.getByText('Your notifications');
    expect(notifs).toBeInTheDocument();
    const list = screen.queryByText('Here is the list of notifications');
    expect(list).not.toBeInTheDocument();
  });
});
