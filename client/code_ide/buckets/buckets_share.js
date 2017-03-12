import React, { Component } from 'react';

class BucketShare extends Component {

  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('buckets.share', this.props.bucket, email);
  }

  renderShareList() {
    return this.props.bucket.sharedWith.map(email => {
      return (
        <button
          key={email}
          className="btn btn-default"
        >
          {email}
        </button>
      );
    });
  }

  render() {
    return (
      <footer className="bg--dark footer-1 text-center-xs">
        <div className="container">
          <div className="row">
            {/*<input ref="email" type="text" className="form-control"/>
            <div className="input-group-btn">
              <button
                className="btn btn-default"
                onClick={this.onShareClick.bind(this)}
              >
                Share Bucket
              </button>
            </div>*/}
          </div>
        </div>
        {/*<div>Shared With:</div>
        <div className="btn-group">{this.renderShareList()}</div>*/}
      </footer>
    );
  }
}

export default BucketShare;
