import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/buckets';
import BucketsEditor from './buckets_editor';
import BucketViewer from './bucket_viewer';

class BucketsMain extends Component {
  render() {
    if (!this.props.bucket) { return <div>Loading...</div> }
    return (
      <div>
        <BucketsEditor bucket={this.props.bucket} />
        <BucketViewer bucket={this.props.bucket} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bucketId } = props.params;
  Meteor.subscribe('buckets');
  return { bucket: Buckets.findOne(bucketId) };
}, BucketsMain);
