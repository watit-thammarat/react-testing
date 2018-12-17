import { SAVE_COMMENT, GET_COMMENTS } from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case GET_COMMENTS:
      return [...state];
    default:
      return state;
  }
};
