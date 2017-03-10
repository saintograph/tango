import React, { Component } from 'react';

import Accounts from './accounts';

class Header extends Component {

  onBucketClick(event) {
    event.preventDefault();

    Meteor.call('buckets.insert');
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a href="" className="navbar-brand">TANGO</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts /></li>
          <li>
            <a href="#" onClick={this.onBucketClick.bind(this)}>Create bucket</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
