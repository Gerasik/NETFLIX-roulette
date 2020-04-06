import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Body from 'components/Body';
import { setData } from './actions';
import { moviesData } from './selectors';

// import { createSelector } from 'reselect';
// add later
// const bodySelector = createSelector(
//   [(state: { toJS: () => { bodyReducer: State } }) => state.toJS()],
//   bodyReducer => bodyReducer
// );

const mapStateToProps = createStructuredSelector({
  moviesData,
});

const mapDispatchToProps = {
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
