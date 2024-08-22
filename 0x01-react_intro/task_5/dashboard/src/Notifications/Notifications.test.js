import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notification tests', () => {
  test('renders Notification component without crashing', () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  test('ul is rendered', () => {
    const component = shallow(<Notifications />);

    expect(component.find('ul')).toBeDefined();
  });

  test('Three list items are rendered', () => {
    const component = shallow(<Notifications />);

    expect(component.find('li')).toHaveLength(3);
  });

  test('renders correct text', () => {
    const component = shallow(<Notifications />);
    const p = component.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });
});
