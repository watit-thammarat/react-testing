import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment, fetchComments } from '../actions';
import requireAuth from './requireAuth';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  onCommentChange = e => this.setState({ comment: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  onClick = e => {
    this.props.fetchComments();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Add a comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.onCommentChange}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.onClick}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments }
)(requireAuth(CommentBox));
