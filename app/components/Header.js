import React, { Component } from 'react';

import style from './Header.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Hacker News</h1>
      </div>
    );
  }
}
