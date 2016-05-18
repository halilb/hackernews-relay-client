import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class StoryListItem extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const item = this.props.store;

    return (
      <div>
        <span>{item.score} Score</span>{' '}
        <Link to={`comments/${item.id}`}>{item.descendants} Comments</Link>
        <h3>
          <a href={item.url}>{item.title}</a>
        </h3>
        <hr />
      </div>
    );
  }
}

export default Relay.createContainer(StoryListItem, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsItem {
        id
        title,
        score,
        descendants,
        url
      }
    `,
  },
});
