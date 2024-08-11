import React from 'react';
import { shallow } from 'enzyme';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

  it.skip('Rendering with with html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type="default" html={htmlProp} />
    );

    expect(wrapper.html()).toEqual(
      '<li class="Notifications-li">[object Object]</li>'
    );
  });
});

describe('markAsRead function tests', () => {
  it('markAsRead function tests', () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: 'test item', markAsRead: spy, id: 1 });
    wrapper.find('li').props().onClick();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
