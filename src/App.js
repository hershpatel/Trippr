import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchView from './components/Search.js'

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import ClusterView from './components/Cluster';
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={SearchView}/>
          <Route exact path='/search' component={SearchView} />
          <Route exact path='/clusters/:city' component={ClusterView} />
        </div>
      </Router>
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
