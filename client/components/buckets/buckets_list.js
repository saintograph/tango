import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/buckets';

class BucketsList extends Component {
  renderList() {
    return this.props.buckets.map(bucket => {
      return (
        <li className="list-group-item" key={bucket._id}>
          Bucket {bucket._id}
        </li>
      )
    })
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

  return { buckets: Buckets.find({}).fetch() };
}, BucketsList);
