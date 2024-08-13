import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import { getLatestNotification } from 'utils/utils';

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
  it('Rendering Notification component without crashing', () => {
    render(<Notifications />);
  });

  it('ul is rendered', () => {
    render(<Notifications displayDrawer={true} />);
    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
  });

  it('Three list items are rendered', () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  it('No list items are rendered', () => {
    const screen = render(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    const noNotif = screen.queryByText('No new notification for now');
    expect(noNotif).toBeInTheDocument();
  });

  it('Rendering correct text', () => {
    render(<Notifications displayDrawer={true} />);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
  });

  it('Rendering Notification without drawer', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationContainer = screen.queryByText(
      'Here is the list of notifications'
    );
    expect(notificationContainer).not.toBeInTheDocument();
  });

  it('Rendering Notification with drawer', () => {
    render(<Notifications displayDrawer={true} />);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
  });
});

describe('Component re-rendering tests', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'value 1', html: null },
    { id: 2, type: 'default', value: 'value 2', html: null },
  ];

  it('should rerender with a longer list', () => {
    const longerList = [
      ...notifications,
      { id: 3, type: 'default', value: 'value 3', html: null },
    ];

    const { rerender } = render(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );

    rerender(
      <Notifications displayDrawer={true} listNotifications={longerList} />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

describe('Notifications state tests', () => {
  it('When displayDrawer is true, the menu is displayed', () => {
    render(<Notifications displayDrawer={true} />);
    const list = screen.getByText('Here is the list of notifications');
    expect(list).toBeInTheDocument();
    const notifs = screen.queryByText('Your notifications');
    expect(notifs).not.toBeInTheDocument();
  });

  it('When displayDrawer is false, the menu is not displayed', () => {
    render(<Notifications displayDrawer={false} />);
    const notifs = screen.getByText('Your notifications');
    expect(notifs).toBeInTheDocument();
    const list = screen.queryByText('Here is the list of notifications');
    expect(list).not.toBeInTheDocument();
  });
});
