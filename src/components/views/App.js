import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { Navbar, NavBrand } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <Navbar fixedTop toggleNavKey={0}>
          <NavBrand>
            <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
              <div className={styles.brand}/>
              <span>{config.app.title}</span>
            </IndexLink>
          </NavBrand>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
