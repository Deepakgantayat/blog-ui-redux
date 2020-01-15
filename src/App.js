import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeComponent from './Home'
import About from './About'

import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import UserPosts from './components/users/UserPosts'
import CommentShow from './components/users/UserComment'

function App() {
  return (
    <BrowserRouter>
   <div className = "container-fluid">
    <nav className="navbar   bg-primary">
    <a className="navbar-brand" style={{color:"white"}}>BLOG UI</a>
      <ul className="nav justify-content-end">   
        <div className="nav justify-content-end">
        <li className="nav-item active"><Link to="/"  className="nav-link" style={{color:"white"}}>Home</Link></li>
        <li className="nav-item"><Link to="/users"  className="nav-link" style={{color:"white"}}>Users</Link></li> 
        <li className="nav-item"><Link to = "/posts"  className="nav-link" style={{color:"white"}}>Posts</Link></li>
        <li className="nav-item"><Link to="/about"  className="nav-link" style={{color:"white"}}>About</Link></li>
        </div>
       
  
      </ul></nav>
      <Route path="/" component={HomeComponent} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path = "/posts" component = {UserPosts} exact = {true}/>
      <Route path = "/posts/:id" component = {CommentShow}/>
      <Route path="/users/:id" component={UserShow}/> 
   
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
