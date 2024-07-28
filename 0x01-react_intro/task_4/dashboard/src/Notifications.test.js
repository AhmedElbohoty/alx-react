import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  it('ul is rendered', () => {
    const component = shallow(<Notifications />);

    expect(component.find('ul')).toBeDefined();
  });

  it('Three list items are rendered', () => {
    const component = shallow(<Notifications />);

    expect(component.find('li')).toHaveLength(3);
  });

  it('renders correct text', () => {
    const component = shallow(<Notifications />);
    const p = component.find('p');

    expect(p.prop('children')).toBe('Here is the list of notifications');
  });
});
