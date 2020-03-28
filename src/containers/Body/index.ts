import { State, MoviesResponse } from 'models';
import { connect } from 'react-redux';

import Body from 'components/Body';
import { setData } from './actions';

// import { createSelector } from 'reselect';
// add later
// const bodySelector = createSelector(
//   [(state: { toJS: () => { bodyReducer: State } }) => state.toJS()],
//   bodyReducer => bodyReducer
// );

type StateToProps<> = (state: {
  toJS: () => { movieData: MoviesResponse };
}) => { bodyReducer: MoviesResponse | {} };

const mapStateToProps: StateToProps = state => ({
  bodyReducer: state.toJS().movieData,
});

const mapDispatchToProps = {
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
