import React from 'react';
import { shallow } from 'enzyme';

import App from 'src/App/App';

describe('App tests', () => {
  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App-body')).toBeDefined();
  });
});
