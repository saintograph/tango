import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'buckets.insert': function () {
    return Buckets.insert({
      createdAt: new Date(),
      content: '',
      ownerId: this.userId,
      sharedWith: [],
    });
  },
});

export const Buckets = new Mongo.Collection('bucket');
