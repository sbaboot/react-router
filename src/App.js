import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Home from './Home'
import History from './History'
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/notre-histoire'>History</NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" exact component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;