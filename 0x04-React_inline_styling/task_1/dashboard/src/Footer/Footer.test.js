import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

import Footer from './Footer';

describe('Footer test', () => {
  it('Rendering Footer without crashing', () => {
    shallow(<Footer />);
  });

  it('Rendering Footer the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
