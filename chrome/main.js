import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import Relay from 'react-relay';
import { applyRouterMiddleware, Router, useRouterHistory } from 'react-router';
import useRelay from 'react-router-relay';

import routes from '../app/Routes';

import './main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://www.graphqlhub.com/graphql')
);

const history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router
    history={history}
    routes={routes}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
  />,
  document.querySelector('#root')
);
