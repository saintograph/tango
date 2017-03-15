import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Buckets } from '../../../imports/collections/tasks';
import Task from './task';

class TasksMain extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const getId = (this.props.location.pathname).split("/");
    const bucketIdProp = getId[2];
    Meteor.call('tasks.insert', bucketIdProp);
    // if (!this.props.tasks) {
    //   // const getId = (this.props.location.pathname).split("/");
    //   // const bucketId = getId[2];
    //   // const createdAt = new Date();
    //   // const content = [];
    //   Meteor.call('tasks.insert');
    // } else {
    //   const getId = (this.props.location.pathname).split("/");
    //   const bucketId = getId[2];
    //   const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    //   Meteor.call('tasks.update', bucketId, text)
    //   ReactDOM.findDOMNode(this.refs.textInput).value = '';
    // }
  }

  getTasks() {
    return [
      { _id: 1, content: 'This is task 1' },
      { _id: 2, content: 'This is task 2' },
      { _id: 3, content: 'This is task 3' },
    ];
  }

  renderTasks() {
    // const getId = (this.props.location.pathname).split("/");
    // const bucketId = getId[2];
    // console.log(bucketId);
    // return this.props.tasks.map((task) => (
    //   <li key={task._id}>{task.content}</li>
    // ));
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  
  render() {
    return (
      <div>
        <h5>Session Goals</h5>
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
  Meteor.subscribe('buckets');
  return { tasks: '' };
}, TasksMain);

