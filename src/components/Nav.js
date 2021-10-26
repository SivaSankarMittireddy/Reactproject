import React, { Component } from 'react'
import { Route,BrowserRouter as Router,Link,Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import News from './News';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import Dashboard from './Dashboard';
import UserList from './UserList';
export class Nav extends Component {
  render() {
    return (
      <div>
        <Router>
       <ul>
  <li><Link to={"/home"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></li>
  <li><Link to={"/news"}>News</Link></li>
  <li><Link to={"/about"}>About us</Link></li>
  <li><Link to={"/contact"}>Contact us</Link></li>
  <li><Link to={"/login"}>Login</Link></li>
  <li><Link to={"/dashboard"}>DashBoard</Link></li>
  <li><Link to={"/userslist"}>UserList</Link></li>
</ul>
<Switch>
<Route path="/home">
    <Home/>
  </Route>
  <Route path="/news">
    <News/> 
  </Route>
  <Route path="/about">
    <About/>
  </Route>
  <Route path="/contact">
    <Contact/>
  </Route>
  <Route path="/login">
    <Login/>
  </Route>
  <Route path="/dashboard">
    <Dashboard/>
  </Route>
  <Route path="/userslist">
    <UserList/>
  </Route>

</Switch>
</Router>
      </div>
      
    )
  }
}

export default Nav
