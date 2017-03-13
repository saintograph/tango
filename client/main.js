import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import { Buckets } from '../imports/collections/buckets'; // passed down to child components
import { Tasks } from '../imports/collections/tasks';
import MainView from './views/main_view';
import BucketsMain from './code_ide/buckets/buckets_main';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={MainView} />
      <Route path="/buckets/:bucketId" component={BucketsMain} />
    </Route>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render(
    routes,
    document.querySelector('.render-target'),
  );
});
