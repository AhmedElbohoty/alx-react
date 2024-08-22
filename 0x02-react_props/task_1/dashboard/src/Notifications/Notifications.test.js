import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notification tests', () => {
  test('renders Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  test('ul is rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('ul')).toBeDefined();
  });

  test('Three list items are rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('li')).toHaveLength(3);
  });

  test('renders correct text', () => {
    const wrapper = shallow(<Notifications />);
    const p = wrapper.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });
});
