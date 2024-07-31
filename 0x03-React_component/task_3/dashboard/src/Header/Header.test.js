import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header tests', () => {
  it('Rendering Header without crashing', () => {
    shallow(<Header />);
  });

  it('Rendering Header img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
