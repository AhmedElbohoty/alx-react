import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer test', () => {
  test('Rendering Footer without crashing', () => {
    shallow(<Footer />);
  });

  test('Rendering Footer the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
