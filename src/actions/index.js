import { SAVE_COMMENT, GET_COMMENTS } from './types';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const getComments = () => {
  return { type: GET_COMMENTS };
};
