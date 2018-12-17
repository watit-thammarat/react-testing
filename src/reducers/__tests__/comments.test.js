import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const comment = 'New Comment';
  const action = { type: SAVE_COMMENT, payload: comment };

  const state = commentsReducer([], action);

  expect(state).toEqual([comment]);
});

it('handles action with unknown type', () => {
  const state = commentsReducer([], { type: 'DUMMY' });

  expect(state).toEqual([]);
});
