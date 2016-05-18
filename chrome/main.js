import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import { RootContainer } from '../app/Routes';

import './main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://www.graphqlhub.com/graphql')
);

ReactDOM.render(
  RootContainer,
  document.querySelector('#root'),
);
