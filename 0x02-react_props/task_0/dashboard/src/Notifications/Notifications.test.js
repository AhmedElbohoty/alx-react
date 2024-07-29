import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  it('ul is rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('ul')).toBeDefined();
  });

  it('Three list items are rendered', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('renders correct text', () => {
    const wrapper = shallow(<Notifications />);
    const p = wrapper.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });
});
