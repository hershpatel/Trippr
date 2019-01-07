import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchView from './components/Search.js'

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import ClusterView from './components/Cluster';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <div>
        <ClusterView/>  
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
