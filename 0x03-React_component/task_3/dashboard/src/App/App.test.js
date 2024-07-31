import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

describe('App tests', () => {
  test('Rendering App without crash', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test('Rendering App with login', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  test('Rendering App with CourseList', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe('Handle keydown tests', () => {
  let logOutMock;
  let alertSpy;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('When pressing Control + h', () => {
    mount(<App isLoggedIn={true} logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });

  it('When Control or h keys are pressed separately', () => {
    mount(<App isLoggedIn={true} logOut={logOutMock} />);

    // Simulate keydown event for Control key only
    const eventH = new KeyboardEvent('keydown', { key: 'Control' });
    const eventCtrl = new KeyboardEvent('keydown', { key: 'h' });
    document.dispatchEvent(eventH);
    document.dispatchEvent(eventCtrl);

    expect(logOutMock).not.toHaveBeenCalled();
    expect(alertSpy).not.toHaveBeenCalled();
  });
});
