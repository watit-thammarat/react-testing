import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root';

describe('CommentBox component', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
    wrapped = null;
  });

  it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  describe('', () => {
    const comment = 'new comment';

    beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
        target: { value: comment }
      });
      wrapped.update();
    });

    it('has a text ara that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual(comment);
    });

    it('when form is submitted, text area gets emptied', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value').length).toEqual(0);
    });
  });
});
