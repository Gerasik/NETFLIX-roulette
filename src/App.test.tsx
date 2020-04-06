import React from 'react';
import { mount } from 'enzyme';

import App from 'App';

describe('<App />', () => {
  const wrapper = mount(<App />);

  it('should render with test data', () => {
    expect(wrapper.find('input').prop('placeholder')).toBe('Search');
  });
});
