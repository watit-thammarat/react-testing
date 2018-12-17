import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions';

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(c => <li key={c}>{c}</li>);
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
  { getComments }
)(CommentList);
