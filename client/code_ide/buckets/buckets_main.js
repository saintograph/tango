import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/buckets';
import BucketsEditor from './buckets_editor';
import BucketsViewer from './buckets_viewer';
import BucketsShare from './buckets_share';
import Header from '../../components/header';

class BucketsMain extends Component {
  render() {
    if (!this.props.bucket) { return <div>Loading...</div> }
    return (
      <div>
        <Header />
        <BucketsEditor bucket={this.props.bucket} />
        <BucketsShare bucket={this.props.bucket} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bucketId } = props.params;
  Meteor.subscribe('buckets');
  Meteor.subscribe('sharedBuckets');
  return { bucket: Buckets.findOne(bucketId) };
}, BucketsMain);
