import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('task');

Meteor.methods({
  'tasks.insert': function () {
    return Tasks.insert({
      createdAt: new Date(),
      content: [],
    });
  },
  'tasks.remove': function (task) {
    return Tasks.remove(task);
  },
  'tasks.update': function (task, text) {
    return Tasks.update('Q7d5s66eMkz8qvWEJ', { $push: { content: text } });
  },
});
