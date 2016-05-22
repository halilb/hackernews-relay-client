import React, { Component } from 'react';

import style from './Header.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <a href="#" className={style.title}>
            Hacker News
        </a>
      </div>
    );
  }
}
