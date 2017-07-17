import { createSelector } from 'reselect';
import { toJS } from 'immutable';

const selectGroups = (state) => state.get('groups');

const makeSelectGroupsSorted = () => createSelector(
  selectGroups,
  (groupsState) => groupsState.sort((groupA, groupB) => groupA.position - groupB.position).toJS(),
);

export {
  selectGroups,
  makeSelectGroupsSorted,
};