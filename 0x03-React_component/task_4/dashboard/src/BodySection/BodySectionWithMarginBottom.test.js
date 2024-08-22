import React from 'react';
import { shallow } from 'enzyme';

import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom tests', () => {
  test('Check if h2 is exist', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).dive().find('h2').text()).toEqual(
      'test title'
    );
  });
});
