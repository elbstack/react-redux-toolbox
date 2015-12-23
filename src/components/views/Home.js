import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button';
import config from '../../config';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>

        <div className="container">
          <h3>Was ist fitbut</h3>
          <dl>
            <dt>megageil</dt>
            <dd>
              fitbut ist dies das aber auf jeden Fall mega geil.
            </dd>
          </dl>
          <Button label="react toolbox button" raised accent />
        </div>
      </div>
    );
  }
}
