import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import { Buckets } from '../imports/collections/buckets'; // passed down to child components
import BucketsList from './components/buckets/buckets_list';
import BucketsMain from './components/buckets/buckets_main';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={BucketsList} />
      <Route path="/buckets/:bucketId" component={BucketsMain} />
    </Route>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render(
    routes,
    document.querySelector('.render-target')
  );
});
