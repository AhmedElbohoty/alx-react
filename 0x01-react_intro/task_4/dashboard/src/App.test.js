import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App tests', () => {
  test('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  test('should render a div with the class App-header', () => {
    const component = shallow(<App />);

    expect(component.find('.App-header')).toBeDefined();
  });

  test('should render a div with the class App-body', () => {
    const component = shallow(<App />);

    expect(component.find('.App-body')).toBeDefined();
  });

  test('should render a div with the class App-footer', () => {
    const component = shallow(<App />);

    expect(component.find('.App-footer')).toBeDefined();
  });
});
