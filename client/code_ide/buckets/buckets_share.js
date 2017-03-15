import React, { Component } from 'react';

class BucketShare extends Component {

  constructor(props) {
    super(props);
    this.onShareClick = this.onShareClick.bind(this);
  }

  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('buckets.share', this.props.bucket, email);
  }

  renderShareList() {
    return this.props.bucket.sharedWith.map(email => {
      return (
        <p
          key={email}
        >
          {email}
        </p>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <input ref="email" type="text"/>
            <div>
              <button
                onClick={this.onShareClick}
              >
                Share Bucket
              </button>
            </div>
          </div>
        </div>
        <div>Shared With:</div>
        {this.renderShareList()}
      </div>
    );
  }
}

export default BucketShare;
