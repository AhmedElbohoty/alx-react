import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { renderWithRedux } from 'utils/test_utils';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
];

describe('NotificationItem tests', () => {
  test('Rendering without crashing', () => {
    const options = {
      preloadedState: {
        app: { user: {}, isUserLoggedIn: true },
        courses: { courses: [] },
        notifications: { notifications, isFetching: false },
      },
    };
    renderWithRedux(
      <NotificationItem id="5debd76480edafc8af244228" />,
      options
    );
  });
});
