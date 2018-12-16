import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment } from '../actions';

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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.onCommentChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { saveComment }
)(CommentBox);
