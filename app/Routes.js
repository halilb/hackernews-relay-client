import React from 'react';
import Relay from 'react-relay';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import StoryList from './components/StoryList';

const StoreQuery = {
  store: (Component) => Relay.QL`
    query root {
      hn { ${Component.getFragment('store')} },
    }
  `,
};

export default (
  <Route
    path="/"
    component={App}
    queries={StoreQuery}
  >
    <IndexRoute
      component={StoryList}
      queries={StoreQuery}
      prepareParams={() => ({ storyType: 'top' })}
    />
    <Route
      path=":storyType"
      component={StoryList}
      queries={StoreQuery}
    />
  </Route>
);
