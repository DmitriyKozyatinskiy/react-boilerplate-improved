import { fromJS } from 'immutable';

import {
} from './constants';

const initialState = fromJS([
  {
    id: 0,
    name: 'Built-in blocks',
    position: 0,
  },
  {
    id: 1,
    name: 'Add blocks here',
    position: 1,
  },
  {
    id: 2,
    name: 'New group 1',
    position: 2,
  },
]);

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
