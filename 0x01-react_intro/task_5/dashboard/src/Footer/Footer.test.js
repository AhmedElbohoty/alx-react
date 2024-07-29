import React from 'react';
import { shallow } from 'enzyme';

import App from 'src/App/App';

describe('App tests', () => {
  it('should render a div with the class App-footer', () => {
    const component = shallow(<App />);

    expect(component.find('.App-footer')).toBeDefined();
  });
});