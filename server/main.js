import { Meteor } from 'meteor/meteor';
import { Buckets } from '../imports/collections/buckets';

Meteor.startup(() => {
  Meteor.publish('buckets', function () {
    return Buckets.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBuckets', function () {
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }

    const email = user.emails[0].address;

    return Buckets.find({
      sharedWith: { $elemMatch: { $eq: email } },
    });
  });
});
