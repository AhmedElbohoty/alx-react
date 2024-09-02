import React from 'react';
import { screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { renderWithRedux } from '../utils/test_utils';
import store from '../store/store';

const notifications = [
  {
    id: '5debd76480edafc8af244228',
    author: {
      id: '5debd764a7c57c7839d722e9',
      name: {
        first: 'Poole',
        last: 'Sanders',
      },
      email: 'poole.sanders@holberton.nz',
      picture: 'http://placehold.it/32x32',
      age: 25,
    },
    context: {
      guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
      isRead: true,
      type: 'urgent',
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
  },
  {
    id: '5debd764507712e7a1307303',
    author: {
      id: '5debd7648ba8641ce0a34ea4',
      name: {
        first: 'Norton',
        last: 'Grimes',
      },
      email: 'norton.grimes@holberton.nz',
      picture: 'http://placehold.it/32x32',
      age: 37,
    },
    context: {
      guid: 'cec84b7a-7be4-4af0-b833-f1485433f66e',
      isRead: false,
      type: 'urgent',
      value:
        'ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. ',
    },
  },
  {
    id: '5debd76444dd4dafea89d53b',
    author: {
      id: '5debd764a7c57c7839d722e9',
      name: {
        first: 'Poole',
        last: 'Sanders',
      },
      email: 'poole.sanders@holberton.nz',
      picture: 'http://placehold.it/32x32',
      age: 25,
    },
    context: {
      guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
      isRead: false,
      type: 'urgent',
      value:
        'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
      html: getLatestNotification(),
    },
  },
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
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true },
        courses: { courses: [] },
        notifications: { notifications: [] },
      },
    };
    renderWithRedux(<Notifications />, options);
    const ulElement = screen.getByText(/Your notifications/);
    expect(ulElement).toBeInTheDocument();
  });

  test.skip('Three list items are rendered', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true },
        courses: { courses: [] },
        notifications: { notifications, isFetching: false },
      },
    };
    renderWithRedux(<Notifications />, options);

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('No list items are rendered', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true, displayDrawer: true },
        courses: { courses: [] },
        notifications: { notifications: [] },
      },
    };
    const { ui } = renderWithRedux(<Notifications />, options);
    const noNotif = ui.queryByText('No new notification for now');
    expect(noNotif).toBeInTheDocument();
  });

  test('Rendering correct text', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true, displayDrawer: true },
        courses: { courses: [] },
        notifications: { notifications, isFetching: false },
      },
    };
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
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true, displayDrawer: true },
        courses: { courses: [] },
        notifications: { notifications, isFetching: false },
      },
    };
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

    const { rerender } = renderWithRedux(<Notifications />);

    rerender(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

describe('Notifications state tests', () => {
  test('When displayDrawer is true, the menu is displayed', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true, displayDrawer: true },
        courses: { courses: [] },
        notifications: { notifications, isFetching: false },
      },
    };
    renderWithRedux(<Notifications />, options);
    const list = screen.getByText(/Here is the list of notifications/);
    expect(list).toBeInTheDocument();
    const notifs = screen.queryByText('Your notifications');
    expect(notifs).not.toBeInTheDocument();
  });

  test('When displayDrawer is false, the menu is not displayed', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true },
        courses: { courses: [] },
        notifications: { notifications },
      },
    };
    renderWithRedux(<Notifications />, options);
    const notifs = screen.getByText('Your notifications');
    expect(notifs).toBeInTheDocument();
    const list = screen.queryByText('Here is the list of notifications');
    expect(list).not.toBeInTheDocument();
  });
});
