import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from 'utils/utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notification tests', () => {
  test('Rendering Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  test('ul is rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('ul')).toBeDefined();
  });

  test('Three list items are rendered', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  test('No list items are rendered', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });

  test('Rendering correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const p = wrapper.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });

  test('Rendering Notification without drawer', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  test('Rendering Notification with drawer', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});

describe('Component re-rendering tests', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'value 1', html: null },
    { id: 2, type: 'default', value: 'value 2', html: null },
  ];

  test('should not rerender with the same list', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: notifications,
    });

    expect(shouldUpdate).toBe(false);
  });

  test('should rerender with a longer list', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );

    const longerList = [
      ...notifications,
      { id: 3, type: 'default', value: 'value 3', html: null },
    ];

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: longerList,
    });

    expect(shouldUpdate).toBe(true);
  });
});
