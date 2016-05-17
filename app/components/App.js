import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

import StoryList from './StoryList';

import style from './App.css';

const STORY_TYPES = [
  'top',
  'new',
  'ask',
  'show',
];

class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
  };

  _renderStoryTypes() {
    const items = STORY_TYPES.map(type => (
      <li key={type}>
        <Link to={type} activeClassName="selected">{type}</Link>
      </li>
    ));

    return (
      <ul className={style.filters}>
        {items}
      </ul>
    );
  }

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Hacker News</h1>
        {this._renderStoryTypes()}
        {this.props.children}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        ${StoryList.getFragment('store')}
      }
    `,
  },
});
