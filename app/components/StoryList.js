import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import classnames from 'classnames';

import StoryListItem from './StoryListItem';

import style from './StoryList.css';

const STORY_TYPES = [
  'top',
  'new',
  'ask',
  'show',
];

class StoryList extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      storyType: STORY_TYPES[0],
    };
  }

  _changeStoryType(storyType) {
    this.props.relay.setVariables({ storyType });
    this.setState({ storyType });
  }

  _renderStoryTypes() {
    const items = STORY_TYPES.map(type => (
      <li key={type}>
        <a
          className={classnames({ selected: this.state.storyType === type })}
          onClick={this._changeStoryType.bind(this, type)}
        >
          {type}
        </a>
      </li>
    ));

    return (
      <ul className={style.filters}>
        {items}
      </ul>
    );
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
        {this._renderStoryTypes()}
        {this._renderItems()}
      </div>
    );
  }
}

export default Relay.createContainer(StoryList, {
  initialVariables: {
    storyType: STORY_TYPES[0],
  },

  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        stories(storyType: $storyType) { ${StoryListItem.getFragment('store')} },
      }
    `,
  },
});
