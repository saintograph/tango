import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('task');

Meteor.methods({
  'tasks.insert': function (bucketIdProp) {
    return Tasks.insert({
      bucketId: bucketIdProp,
      createdAt: new Date(),
      content: [],
    });
  },
  'tasks.remove': function (task) {
    return Tasks.remove(task);
  },
  'tasks.update': function (bucketId, text) {
    return Tasks.update(bucketId, { $push: { content: text } });
  },
});
