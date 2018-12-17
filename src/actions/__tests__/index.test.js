import { SAVE_COMMENT } from '../types';
import { saveComment } from '../index';

describe('saveComment', () => {
  it('has the correct type', () => {
    const { type } = saveComment();

    expect(type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const comment = 'New Comment';
    const { payload } = saveComment(comment);

    expect(payload).toEqual(comment);
  });
});
