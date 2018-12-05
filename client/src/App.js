import React, { Component } from 'react';
import './App.css';
import {withRouter, Route} from 'react-router-dom';
import ClusterView from './Cluster.js'
import SearchView from './Search.js'


class App extends Component {
  state = {  };

  render() {
    return (
      <div className="App">
        <ClusterView/>    
      </div>
    );
  }
}

export default withRouter(App);