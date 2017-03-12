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
      <nav>
        <div className="nav-bar">
          <div className="nav-module logo-module left">
            <Link to="/" className="navbar-brand" style={{fontSize: 16}}>
              <h4>TANGO</h4>
            </Link>
          </div>
          <div className="nav-module menu-module left">
            <ul className="menu">
              <li><Accounts /></li>
              <li>
                <a href="#" onClick={this.onBucketClick.bind(this)}>Create bucket</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
