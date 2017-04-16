// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './routers/Home';
import Login from './routers/Login';
import Customer from './routers/Customer';
import Nav from './routers/Nav';

const AppRouters = () => (
  <Router>
    <div>
      <Nav />
      <Redirect to='/home' />
      <Route exact path='/home' component={Home} />
      <Route path='/customer' component={Customer} />
      <Route path='/mine' component={Login} />
    </div>
  </Router>
)

export default AppRouters;