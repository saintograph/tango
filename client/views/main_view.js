import React, { Component } from 'react';
import Header from '../components/header.js';
import BucketsList from '../code_ide/buckets/buckets_list';

class MainView extends Component {
  render() {
    return (
      <div>
        <Header />
        <BucketsList />
      </div>
    );
  }
}

export default MainView;
