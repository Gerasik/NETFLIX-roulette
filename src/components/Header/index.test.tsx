import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './index';

describe('<Header />', () => {
  it('renders an `img`', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Router>
        <Header>
          <div className="unique" />
        </Header>
      </Router>
    );
    expect(wrapper.contains(<div className="unique" />)).toBeTruthy();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Router>
        <Header>
          <div className="unique" />
        </Header>
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
