import { Meteor } from 'meteor/meteor';
import { Buckets } from '../imports/collections/buckets';

Meteor.startup(() => {
  Meteor.publish('buckets', function () {
    return Buckets.find({ ownerId: this.userId });
  });
});
