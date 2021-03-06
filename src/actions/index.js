import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: { id: new Date().getTime(), body: comment }
  };
};

// export const fetchComments = () => async dispatch => {
//   try {
//     const url = 'https://jsonplaceholder.typicode.com/comments';
//     const { data } = await axios.get(url);
//     dispatch({ type: FETCH_COMMENTS, payload: data });
//   } catch (err) {
//     console.error(err);
//   }
// };

export const fetchComments = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const promise = axios.get(url);
  return { type: FETCH_COMMENTS, payload: promise };
};

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
});
