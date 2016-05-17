import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class StoryListItem extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const item = this.props.store;

    return (
      <div>
        <h3><a href={item.url}>{item.title}</a></h3>
        <h4>{item.score} - {item.by.id}</h4>
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
        url
        by {
          id
        }
      }
    `,
  },
});
