import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { renderWithRedux } from '../utils/test_utils';

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
    renderWithRedux(<Notifications />);
  });

  test('ul is rendered', () => {
    renderWithRedux(<Notifications displayDrawer={true} />);
    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
  });

  test('Three list items are rendered', () => {
    renderWithRedux(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('No list items are rendered', () => {
    const screen = renderWithRedux(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    const noNotif = screen.queryByText('No new notification for now');
    expect(noNotif).toBeInTheDocument();
  });

  test('Rendering correct text', () => {
    renderWithRedux(<Notifications displayDrawer={true} />);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
  });

  test('Rendering Notification without drawer', () => {
    renderWithRedux(<Notifications displayDrawer={false} />);
    const notificationContainer = screen.queryByText(
      'Here is the list of notifications'
    );
    expect(notificationContainer).not.toBeInTheDocument();
  });

  test('Rendering Notification with drawer', () => {
    renderWithRedux(<Notifications displayDrawer={true} />);
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
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );

    rerender(
      <Notifications displayDrawer={true} listNotifications={longerList} />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

describe('Notifications state tests', () => {
  test('When displayDrawer is true, the menu is displayed', () => {
    renderWithRedux(<Notifications displayDrawer={true} />);
    const list = screen.getByText('Here is the list of notifications');
    expect(list).toBeInTheDocument();
    const notifs = screen.queryByText('Your notifications');
    expect(notifs).not.toBeInTheDocument();
  });

  test('When displayDrawer is false, the menu is not displayed', () => {
    renderWithRedux(<Notifications displayDrawer={false} />);
    const notifs = screen.getByText('Your notifications');
    expect(notifs).toBeInTheDocument();
    const list = screen.queryByText('Here is the list of notifications');
    expect(list).not.toBeInTheDocument();
  });
});
