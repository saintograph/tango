import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Accounts from './accounts';

class Header extends Component {

  onBucketClick(event) {
    event.preventDefault();

    Meteor.call('buckets.insert', (errors, bucket) => {
      browserHistory.push(`/buckets/${bucket}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">TANGO</Link>
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
