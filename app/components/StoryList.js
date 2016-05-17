import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import StoryListItem from './StoryListItem';

class StoryList extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  _renderItems() {
    const stories = this.props.store.stories;
    if (stories) {
      return stories.map(
        (store, idx) => <StoryListItem key={idx} store={store} />
      );
    }
  }

  render() {
    return (
      <div>
        {this._renderItems()}
      </div>
    );
  }
}

export default Relay.createContainer(StoryList, {
  initialVariables: {
    storyType: 'top',
  },

  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        stories(storyType: $storyType) { ${StoryListItem.getFragment('store')} },
      }
    `,
  },
});
