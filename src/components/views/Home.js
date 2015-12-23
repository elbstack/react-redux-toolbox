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
          <h3>Infos</h3>
          <dl>
            <dt>Base project for react web apps</dt>
            <dd>
              This is a base project for several react-redux websites.
            </dd>
            <dt>elbstack GmbH</dt>
            <dd>
              elbstack GmbH is a software development agency based in Hamburg, Germany.
            </dd>
          </dl>
          <Button label="react toolbox button" raised accent />
        </div>
      </div>
    );
  }
}
