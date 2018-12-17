import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      return [...state, ...payload];
    default:
      return state;
  }
};
