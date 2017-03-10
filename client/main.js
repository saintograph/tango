import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Buckets } from '../imports/collections/buckets';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.render-target')
  );
});
