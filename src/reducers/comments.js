import _ from 'lodash';

import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      return [
        ...state,
        ..._.map(payload, ({ id, name, body }) => ({ id, body: name }))
      ];
    default:
      return state;
  }
};
