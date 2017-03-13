import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/buckets';
import { Tasks } from '../../../imports/collections/tasks';
import Task from './task';

class TasksMain extends Component {

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.tasks) {
      Meteor.call('tasks.insert');
    } else {
      const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
      Meteor.call('tasks.update', this.props.tasks, text)
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
  }

  getTasks() {
    return [
      { _id: 1, content: 'This is task 1' },
      { _id: 2, content: 'This is task 2' },
      { _id: 3, content: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <li key={task._id}>{task.content}</li>
    ));
  }
  
  render() {
    return (
      <div>
        <h5>ToDo</h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="textInput"
            placeholder="New task"
          />
        </form>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// export default TasksMain;
export default createContainer(() => {
  Meteor.subscribe('tasks');
  return { tasks: Tasks.find({}).fetch() };
}, TasksMain);

