import React from 'react';
import { mount } from 'enzyme';
import _ from 'lodash';

import CommentList from '../CommentList';
import Root from '../../Root';

describe('CommentList component', () => {
  let wrapped;
  const comments = [
    { id: new Date().getTime(), body: 'Comment 1' },
    { id: new Date().getTime() + 10, body: 'Comment 2' }
  ];

  beforeEach(() => {
    const initialState = { comments };
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
    wrapped = null;
  });

  it('create 1 LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows the text for each comment', () => {
    _.forEach(comments, c => {
      expect(wrapped.render().text()).toContain(c.body);
    });
  });
});
