import React from 'react';
import { shallow } from 'enzyme';

import App from 'src/App/App';

describe('App tests', () => {
  test('should render a div with the class App-footer', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App-footer')).toBeDefined();
  });
});
