import React from 'react';
import Relay from 'react-relay';

class StoryListRoute extends Relay.Route {
  static routeName = 'StoryListRoute';
  static queries = {
    store: (Component) => Relay.QL`
      query root {
        hn { ${Component.getFragment('store')} },
      }
    `,
  };
}

class StoryCommentsRoute extends Relay.Route {
  static routeName = 'StoryCommentsRoute';
  static queries = {
    store: (Component, { storyID }) => Relay.QL`
      query root {
        hn {
            ${Component.getFragment('store', { storyID })}
          }
        }
    `,
  };
  static paramDefinitions = {
    storyID: { required: true },
  };
}

export default {
  StoryListRoute,
  StoryCommentsRoute,
};
