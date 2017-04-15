import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './routers/Home';
import Login from './routers/Login';

const AppRouters = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">About</Link></li>
      </ul>

      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)

export default AppRouters;