import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/buckets';

class BucketsList extends Component {

  onBucketRemove(bucket) {
    Meteor.call('buckets.remove', bucket);
  }

  renderList() {
    return this.props.buckets.map(bucket => {
      const url = `/buckets/${bucket._id}`;
      return (
        <li className="list-group-item" key={bucket._id}>
          <Link to={url}>Bucket {bucket._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBucketRemove(bucket)}
            >
              Remove bucket
            </button>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('buckets');
  Meteor.subscribe('sharedBuckets');
  return { buckets: Buckets.find({}).fetch() };
}, BucketsList);
