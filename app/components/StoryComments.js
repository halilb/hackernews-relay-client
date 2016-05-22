import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import StoryCommentItem from './StoryCommentItem';

class StoryComments extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const store = this.props.store;
    const item = store.item;

    const comments = item.kids.map((kid, index) => (
      <StoryCommentItem
        key={`comment_${index}`}
        store={kid}
      />
    ));

    return (
      <div>
        <h3>{item.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
        {comments}
      </div>
    );
  }
}

export default Relay.createContainer(StoryComments, {
  initialVariables: {
    storyID: null
  },

  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        item(id: $storyID) {
          title,
          text,
          kids {
            ${StoryCommentItem.getFragment('store')}
          }
        }
      }
    `,
  },
});
