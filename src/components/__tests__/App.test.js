import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

describe('App component', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  afterEach(() => {
    wrapped.unmount();
    wrapped = null;
  });

  it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('shows a comment list', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
