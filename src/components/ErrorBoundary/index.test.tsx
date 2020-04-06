/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './index';

class Buggy extends React.Component {
  constructor(props) {
    super(props);
    throw new Error('An error has occured in Buggy component!');
  }

  render() {
    return <h2>Error</h2>;
  }
}

describe('<ErrorBoundary /> test data', () => {
  const wrapper = shallow(
    <ErrorBoundary>
      <h1>Hello world</h1>
    </ErrorBoundary>
  );

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ErrorBoundary /> render error', () => {
  const wrapper = mount(
    <ErrorBoundary>
      <Buggy />
    </ErrorBoundary>
  );

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
