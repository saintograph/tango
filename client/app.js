import React from 'react';
import Header from './components/header';
import ToDo from './todo/todos/tasks_main';

export default (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};
