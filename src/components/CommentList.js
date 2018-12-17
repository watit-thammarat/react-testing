import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../actions';

class CommentList extends Component {
  componentDidMount() {
    // this.props.fetchComments();
  }

  renderComments = () => {
    return this.props.comments.map(c => <li key={c.id}>{c.body}</li>);
  };

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
