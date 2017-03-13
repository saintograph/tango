import { Meteor } from 'meteor/meteor';
import { Buckets } from '../imports/collections/buckets';
import { Tasks } from '../imports/collections/tasks';

Meteor.startup(() => {
  Meteor.publish('buckets', function () {
    return Buckets.find({ ownerId: this.userId });
  });

  Meteor.publish('tasks', function () {
    return Tasks.find();
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
