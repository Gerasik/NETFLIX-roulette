import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { setData } from './actions';
import { State } from './models';
import Body from '../../components/Body';

const bodySelector = createSelector(
  [(state: { toJS: () => { bodyReducer: State } }): any => state.toJS()],
  bodyReducer => bodyReducer
);

const mapStateToProps = (state: { toJS: () => { bodyReducer: State } }): any => ({
  bodyReducer: bodySelector(state),
});

const mapDispatchToProps = {
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
