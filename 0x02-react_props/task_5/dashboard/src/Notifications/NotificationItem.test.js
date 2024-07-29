import React from 'react';
import { shallow } from 'enzyme';

import NotificationItem from './NotificationItem';

describe('NotificationItem tests', () => {
  it('Rendering without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('Rendering with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find('li');

    expect(li.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('Rendering with with html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type="default" html={htmlProp} />
    );

    expect(wrapper.html()).toEqual(
      '<li class="Notifications-li">[object Object]</li>'
    );
  });
});
