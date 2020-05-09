import React from 'react';
import './App.css';
import { Route, Router } from 'react-router'
import Home from './views/Home';
import PropTypes from 'prop-types'

function App(props) {
  return (
    <Router history={props.history}>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

App.protoTypes = {
  history: PropTypes.any.isRequireda
}

export default App;
