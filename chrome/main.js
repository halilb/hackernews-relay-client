import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Header from '../app/components/Header';
import StoryList from '../app/components/StoryList';
import StoryComments from '../app/components/StoryComments';

import { StoryListRoute, StoryCommentsRoute } from '../app/Routes';

import './main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://www.graphqlhub.com/graphql')
);

const mountNode = document.querySelector('#root');
const StoryListRoot = (
  <Relay.RootContainer
    Component={StoryList}
    route={new StoryListRoute()}
    renderLoading={() => <h2>Loading...</h2>}
  />
);

function renderRoot(component) {
  ReactDOM.render(
    <div>
      <Header />
      {component}
    </div>,
    mountNode,
  );
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const storyCommentRoute = new StoryCommentsRoute({
      storyID: parseInt(hash, 10)
    });
    renderRoot(
      <Relay.RootContainer
        route={storyCommentRoute}
        Component={StoryComments}
        renderLoading={() => <h2>Loading...</h2>}
      />
    );
  } else {
    renderRoot(StoryListRoot);
  }
});

renderRoot(StoryListRoot);
