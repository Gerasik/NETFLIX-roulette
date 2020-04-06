import React from 'react';
import { shallow } from 'enzyme';

import Search from '.';

it('render correctly date component', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper).toMatchSnapshot();
});

describe('<Search />', () => {
  it('renders an `footer`', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('input').prop('placeholder')).toBe('Search');
  });
});
