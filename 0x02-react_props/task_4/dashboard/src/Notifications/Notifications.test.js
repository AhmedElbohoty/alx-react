import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification tests', () => {
  it('Rendering Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  it('ul is rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('ul')).toBeDefined();
  });

  it('Three list items are rendered', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Rendering correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const p = wrapper.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });

  it('Rendering Notification without drawer', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('Rendering Notification with drawer', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});
