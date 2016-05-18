import React from 'react';
import Relay from 'react-relay';
import Header from '../app/components/Header';
import StoryList from '../app/components/StoryList';

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

const RootContainer = (
  <div>
    <Header />
    <Relay.RootContainer
      Component={StoryList}
      route={new StoryListRoute()}
      renderLoading={() => <h2>Loading...</h2>}
    />
  </div>
);

export default {
  RootContainer,
};
