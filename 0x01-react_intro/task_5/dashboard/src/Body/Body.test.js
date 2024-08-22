import React from 'react';
import { shallow } from 'enzyme';

import App from 'src/App/App';

describe('App tests', () => {
  test('should render a div with the class App-body', () => {
    const component = shallow(<App />);

    expect(component.find('.App-body')).toBeDefined();
  });
});
