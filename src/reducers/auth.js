import { CHANGE_AUTH } from '../actions/types';

export default (state = false, { type, payload }) => {
  switch (type) {
    case CHANGE_AUTH:
      return payload;
    default:
      return state;
  }
};
