import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App tests', () => {
  test('Rendering App without crash', () => {
    let wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
