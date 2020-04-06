import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Body from 'components/Body';
import { setData } from './actions';
import { moviesData } from './selectors';

const mapStateToProps = createStructuredSelector({
  moviesData,
});

const mapDispatchToProps = {
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
