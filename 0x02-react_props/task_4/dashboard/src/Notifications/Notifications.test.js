import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

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
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
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
