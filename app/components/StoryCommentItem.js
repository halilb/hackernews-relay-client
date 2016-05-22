import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import style from './StoryCommentItem.css';

class StoryCommentItem extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <div className={style.comment}>
        <div className={style.header}>
          <h4>{store.by.id}</h4>
          <span className={style.time}>{store.timeISO}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: store.text }} />
      </div>
    );
  }
}

export default Relay.createContainer(StoryCommentItem, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsItem {
        text,
        timeISO,
        by {
          id
        }
      }
    `,
  },
});
